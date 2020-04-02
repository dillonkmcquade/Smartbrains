import React, { useState } from "react";
import LazySpinner from "../lazySpinner/lazy-spinner.component";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./signin.styles.scss";
import { selectIsLoading } from "../../Redux/user/user.selectors";
import { fetchUserStartAsync } from "../../Redux/user/user.actions";

const Signin = ({ fetchUserStartAsync, isLoading }) => {
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const credentials = {
    email: signInEmail,
    password: signInPassword
  };

  
  if (isLoading) {
    return <LazySpinner />;
  } else {
    return (
      <div className="sign-in-component">
        <article className="center sign-in-form bg-white br3 pa3 pa4-ns mv3 ba shadow-5 bw3 b--light-green">
          <main className="pa4 black-80">
            <div className="measure">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className=" fw6 ph0 f2 mh0">Sign In</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="email-address">
                    Email
                  </label>
                  <input
                    onChange={event => setSignInEmail(event.target.value)}
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
                    onChange={event => setSignInPassword(event.target.value)}
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
                  onClick={() => fetchUserStartAsync(credentials)}
                  className="b ph3 pv2 input-reset ba b--black br3 bg-transparent pointer f6 dib"
                  type="submit"
                  value="Sign in"
                />
              </div>
              <div className="lh-copy mt3">
                <Link
                  to="/register"
                  className="f5 pointer ba-3 link dim black db"
                >
                  Don't have an account?
                </Link>
              </div>
              <span className="red">
                ***For testing please use user: test@gmail.com and password:
                test****
              </span>
            </div>
          </main>
        </article>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  fetchUserStartAsync: credentials => dispatch(fetchUserStartAsync(credentials))
});

const mapStateToProps = state => ({
  isLoading: selectIsLoading(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
