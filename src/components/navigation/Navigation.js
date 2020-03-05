import React from "react";
import Logo from "../logo/Logo";
import { connect } from "react-redux";
import { selectIsLoggedIn } from "../../Redux/user/user.selectors";
import ImageAvatars from "../profile/profile-icon.component";
import "./navigation.css";

const Navigation = ({ isLoggedIn, setProfileOpen }) => {
  return (
    <nav className="navigation">
      <Logo />
      <div className="ph3">{isLoggedIn ? <ImageAvatars setProfileOpen={setProfileOpen}/> : null}</div>
    </nav>
  );
};

const mapStateToProps = state => ({
  isLoggedIn: selectIsLoggedIn(state)
});

export default connect(mapStateToProps)(Navigation);
