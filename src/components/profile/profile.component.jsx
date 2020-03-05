import React, { useState } from "react";
import "./profile.styles.scss";
import { connect } from "react-redux";
import { selectIsProfileOpen } from "../../Redux/user/user.selectors";
import { toggleProfileOpen } from "../../Redux/user/user.actions";
import PersonIcon from "@material-ui/icons/Person";

const Profile = ({ isProfileOpen, toggleProfileOpen }) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <div className="profile-modal">
      <div className="profile">
        <h2>Name</h2>
        <p>Member since: 12/01/2020</p>
        <PersonIcon />
        <hr />
        <form>
          <input
            type="text"
            name="current-password"
            id="current-password"
            placeholder="Current password"
            onChange={event => setCurrentPassword(event.target.value)}
          />
          <input
            type="text"
            name="new-password"
            id="new-password"
            placeholder="New password"
            onChange={event => setNewPassword(event.target.value)}
          />
          <input
            type="text"
            name="confirm-password"
            id="confirm-password"
            placeholder="Confirm new password"
            onChange={event => setConfirmPassword(event.target.value)}
          />
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
