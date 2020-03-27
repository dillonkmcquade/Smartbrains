import React, { useEffect } from "react";
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
import Profile from "./components/profile/profile.component";
import { registerUser } from "./Redux/user/user.actions";

const App = ({ isLoggedIn, isProfileOpen, registerUser }) => {
  const token = window.sessionStorage.getItem("token");
  useEffect(() => {
    const token = window.sessionStorage.getItem("token");
    if (token) {
      fetch("http://localhost:80/signin", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: token
        }
      })
        .then(response => response.json())
        .then(data => {
          if (data && data.id) {
            fetch(
              `http://localhost:80/profile/${data.id}`,
              {
                method: "get",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: token
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
        .catch(console.log);
    }
  }, [registerUser]);
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route
          exact
          path="/"
          render={() =>
            token && isLoggedIn ? <Redirect to="/homepage" /> : <SignIn />
          }
        />
        <Route
          path="/register"
          render={() => (token ? <Redirect to="/homepage" /> : <Register />)}
        />
        <Route
          path="/homepage"
          render={() => (token ? <HomePage /> : <Redirect to="/" />)}
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

const mapDispatchToProps = dispatch => ({
  registerUser: user => dispatch(registerUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
