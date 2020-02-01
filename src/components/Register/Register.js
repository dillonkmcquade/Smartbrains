import React, { useState } from "react";
import "./register.styles.scss";
import { connect } from "react-redux";
import { registerUser } from "../../Redux/user/user.actions";

const Register = ({ registerUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

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
        if (user.id) {
          registerUser(user);
        } else {
          return;
        }
      })
      .catch(console.log("error registering user"));
  };

  return (
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
  );
};

const mapDispatchToProps = dispatch => ({
  registerUser: user => dispatch(registerUser(user))
});

export default connect(null, mapDispatchToProps)(Register);
