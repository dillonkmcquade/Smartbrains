import React from "react";
import RingLoaderComponent from "../ringloader";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./signin.css";
import { selectIsLoading } from "../../Redux/food/food.selectors";
import { fetchUserStartAsync } from "../../Redux/user/user.actions";

class Signin extends React.Component {
  constructor() {
    super();
    this.state = {
      signInEmail: "",
      signInPassword: ""
    };
  }

  onEmailChange = event => {
    this.setState({ signInEmail: event.target.value });
  };
  onPasswordChange = event => {
    this.setState({ signInPassword: event.target.value });
  };

  render() {
    const { signInEmail, signInPassword } = this.state;
    const credentials = {
      email: signInEmail,
      password: signInPassword
    };
    const { fetchUserStartAsync, isLoading } = this.props;
    return (
      <div className="sign-in-component">
        {isLoading ? (
          <RingLoaderComponent />
        ) : (
          <article className=" mw6 center w-50 bg-white br3 pa3 pa4-ns mv3 ba shadow-5 bw3 b--light-green">
            <main className="pa4 black-80">
              <div className="measure">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                  <legend className=" fw6 ph0 f2 mh0">Sign In</legend>
                  <div className="mt3">
                    <label
                      className="db fw6 lh-copy f6"
                      htmlFor="email-address"
                    >
                      Email
                    </label>
                    <input
                      onChange={this.onEmailChange}
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
                      onChange={this.onPasswordChange}
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
                    className="b ph3 pv2 input-reset ba b--black br3 bg-transparent grow pointer f6 dib"
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
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUserStartAsync: credentials => dispatch(fetchUserStartAsync(credentials))
});

const mapStateToProps = state => ({
  isLoading: selectIsLoading(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
