import React, { useState } from "react";
import "./profile.styles.scss";
import { connect } from "react-redux";
import { selectIsProfileOpen, selectUser2 } from "../../Redux/user/user.selectors";
import { toggleProfileOpen, registerUser } from "../../Redux/user/user.actions";
import PersonIcon from "@material-ui/icons/Person";

const Profile = ({ isProfileOpen, toggleProfileOpen, user }) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  

  const changePassword = (data) => {
    
    fetch(`http://localhost:3000/profile/${user.id}`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: user.email,
        currentPassword: currentPassword,
        newPassword: newPassword,
        confirmPassword: confirmPassword
      })
    })
      .then(response => {
        registerUser(...user, ...data);
        toggleProfileOpen();
      })
      .then(console.log('success'))
      .catch(err => console.log('error changing password'))
  };
  
  return (
    <div className="profile-modal">
      <div className="profile">
        <h2>{user.name}</h2>
        <p>{`Member since: ${new Date(user.joined).toLocaleDateString()}`}</p>
        <PersonIcon />
        <hr />
        <form>
          <input
            type="password"
            name="current-password"
            id="current-password"
            placeholder="Current password"
            onChange={event => setCurrentPassword(event.target.value)}
          />
          <input
            type="password"
            name="new-password"
            id="new-password"
            placeholder="New password"
            onChange={event => setNewPassword(event.target.value)}
          />
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
            placeholder="Confirm new password"
            onChange={event => setConfirmPassword(event.target.value)}
          />
          <button onClick={() => changePassword()}>Change password</button>
        </form>
        <button onClick={() => toggleProfileOpen(!isProfileOpen)}>Close</button>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  isProfileOpen: selectIsProfileOpen(state),
  user: selectUser2(state)
});

const mapDispatchToProps = dispatch => ({
  toggleProfileOpen: input => dispatch(toggleProfileOpen(input))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
