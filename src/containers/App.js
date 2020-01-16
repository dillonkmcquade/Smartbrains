import React from "react";
import "./App.css";
import Particles from "react-particles-js";
import particlesOptions from "../components/particles";
import { connect } from "react-redux";
import Logo from "../components/logo/Logo";
import { selectIsLoggedIn, selectIsLoading } from "../Redux/user/user.selectors";
import HomePage from "../pages/homepage/homepage.component";
import SignIn from "../components/Signin/Signin";
import Register from "../components/Register/Register";
import { Switch, Route } from "react-router-dom";
import RingLoaderComponent from "../components/ringloader";

const App = ({ isLoggedIn , isLoading}) => {
  return (
    <div className="App">
      <Particles className="particles" params={particlesOptions} />
      <Logo />
      {!isLoggedIn ? (
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route path="/register" component={Register} />
        </Switch>
      ) : (
        isLoading ? <RingLoaderComponent /> : <HomePage />
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  isLoggedIn: selectIsLoggedIn(state),
  isLoading: selectIsLoading(state)
});

export default connect(mapStateToProps)(App);
