import React from "react";
import "./profile.styles.scss";
import { connect } from "react-redux";
import { selectIsProfileOpen } from "../../Redux/user/user.selectors";
import { toggleProfileOpen } from "../../Redux/user/user.actions";
import PersonIcon from "@material-ui/icons/Person";

const Profile = ({ isProfileOpen, toggleProfileOpen }) => {
  return (
    <div className="profile-modal">
      <div className="profile">
        <h2>Name</h2>
        <p>Member since: 12/01/2020</p>
        <PersonIcon />
        <form>
          <input type="text" placeholder="Current password" />
          <input type="text" placeholder="New password" />
          <input type="text" placeholder="Confirm new password" />
          <button>Change password</button>
        </form>
        <button onClick={() => toggleProfileOpen(!isProfileOpen)}>Close</button>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  isProfileOpen: selectIsProfileOpen(state)
});

const mapDispatchToProps = dispatch => ({
  toggleProfileOpen: input => dispatch(toggleProfileOpen(input))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
