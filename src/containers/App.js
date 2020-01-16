import React from "react";
import "./App.css";
import Particles from "react-particles-js";
import particlesOptions from "../components/particles";
import { selectIsLoading } from "../Redux/food/food.selectors";
import { connect } from "react-redux";
import Logo from "../components/logo/Logo";
import { selectUserId } from "../Redux/user/user.selectors";
import HomePage from "../pages/homepage/homepage.component";
import SignIn from "../components/Signin/Signin";
import Register from "../components/Register/Register";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Particles className="particles" params={particlesOptions} />
      <Logo />
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/register" component={Register} />
        <Route path="/homepage" component={HomePage} />
      </Switch>
    </div>
  );
};

const mapStateToProps = state => ({
  isLoading: selectIsLoading(state),
  user: selectUserId(state)
});

export default connect(mapStateToProps)(App);
