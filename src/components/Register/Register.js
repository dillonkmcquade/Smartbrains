import React, { useState } from "react";
import "./register.styles.scss";
import { connect } from "react-redux";
import { registerUser, setLoading } from "../../Redux/user/user.actions";
import RingLoaderComponent from "../ring-loader/ringloader";
import { selectIsLoading } from "../../Redux/user/user.selectors";

const Register = ({ registerUser, isLoading }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const saveAuthTokenInSession = token => {
    window.sessionStorage.setItem("token", token);
  };

  const onSubmitRegister = () => {
    fetch("https://fierce-mountain-50317.herokuapp.com/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password
      })
    })
      .then(response => response.json())
      .then(user => {
        console.log(user);
        if (user.userId && user.token) {
          saveAuthTokenInSession(user.token);
          fetch(
            `https://fierce-mountain-50317.herokuapp.com/profile/${user.userId}`,
            {
              method: "get",
              headers: {
                "Content-Type": "application/json",
                Authorization: user.token
              }
            }
          )
            .then(response => response.json())
            .then(user => {
              if (user && user.email) {
                registerUser(user);
              }
            })
            .catch(console.log);
        }
      })
      .catch(err => {
        console.log("error registering user");
      });
  };
  if (isLoading) {
    return <RingLoaderComponent />;
  } else {
    return (
      <div className="register-container">
        <article className="mw6 register-component center bg-white br3 pa3 pa4-ns mv3 ba shadow-5 bw3 b--light-green">
          <main className="pa4 black-80">
            <div className="measure">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className=" fw6 ph0 f2 mh0">Register</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="name">
                    Name
                  </label>
                  <input
                    onChange={event => setName(event.target.value)}
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="text"
                    name="name"
                    id="name"
                    required
                  />
                </div>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="email-address">
                    Email
                  </label>
                  <input
                    onChange={event => setEmail(event.target.value)}
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="email"
                    name="email-address"
                    id="email-address"
                    required
                  />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="password">
                    Password
                  </label>
                  <input
                    onChange={event => setPassword(event.target.value)}
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="password"
                    name="password"
                    id="password"
                    required
                  />
                </div>
              </fieldset>
              <div>
                <input
                  onClick={onSubmitRegister}
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                  type="submit"
                  value="Register"
                />
              </div>
            </div>
          </main>
        </article>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  registerUser: user => dispatch(registerUser(user)),
  setLoading: action => dispatch(setLoading(action))
});

const mapStateToProps = state => ({
  isLoading: selectIsLoading(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
