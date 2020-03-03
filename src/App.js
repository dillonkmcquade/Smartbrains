import React from "react";
import { connect } from "react-redux";
import Navigation from "./components/navigation/Navigation";
import { selectIsLoggedIn } from "./Redux/user/user.selectors";
import HomePage from "./pages/homepage/homepage.component";
import SignIn from "./components/Signin/Signin";
import Register from "./components/Register/Register";
import { Switch, Route, Redirect } from "react-router-dom";
import Footer from "./components/footer/footer.component";

const App = ({ isLoggedIn }) => {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (isLoggedIn ? <Redirect to="/homepage" /> : <SignIn />) }
        />
        <Route
          path="/register"
          render={() =>
            isLoggedIn ? <Redirect to="/homepage" /> : <Register />
          }
        />
        <Route
          path="/homepage"
          render={() => (isLoggedIn ? <HomePage /> : <Redirect to="/" />)}
        />
      </Switch>
      <Footer />
    </div>
  );
};

const mapStateToProps = state => ({
  isLoggedIn: selectIsLoggedIn(state)
});

export default connect(mapStateToProps)(App);
