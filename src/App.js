import React from "react";
import { connect } from "react-redux";
import Navigation from "./components/navigation/Navigation";
import {
  selectIsLoggedIn,
  selectIsProfileOpen
} from "./Redux/user/user.selectors";
import HomePage from "./pages/homepage/homepage.component";
import SignIn from "./components/Signin/Signin";
import Register from "./components/Register/Register";
import { Switch, Route, Redirect } from "react-router-dom";
import Footer from "./components/footer/footer.component";
import Modal from "./components/modal/modal.js";
import Profile from './components/profile/profile.component';

const App = ({ isLoggedIn, isProfileOpen }) => {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (isLoggedIn ? <Redirect to="/homepage" /> : <SignIn />)}
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
      {isProfileOpen ? (
        <Modal>
          <Profile />
        </Modal>
      ) : null}
      <Footer />
    </div>
  );
};

const mapStateToProps = state => ({
  isLoggedIn: selectIsLoggedIn(state),
  isProfileOpen: selectIsProfileOpen(state)
});

export default connect(mapStateToProps)(App);
