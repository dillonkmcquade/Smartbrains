import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import PersonIcon from "@material-ui/icons/Person";
import {
  updateImageUrl,
  fetchFoodDataSuccess
} from "../../Redux/food/food.actions";
import { userLogOut, toggleProfileOpen } from "../../Redux/user/user.actions";
import { selectIsProfileOpen } from "../../Redux/user/user.selectors";
import { connect } from "react-redux";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(3),
      cursor: "pointer"
    }
  }
}));

const ImageAvatars = ({
  userLogOut,
  updateImageUrl,
  fetchFoodDataSuccess,
  toggleProfileOpen,
  isProfileOpen
}) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfileButton = () => {
    toggleProfileOpen(!isProfileOpen);
    handleClose();
  };

  const handleLogOut = () => {
    window.sessionStorage.removeItem("token");
    userLogOut();
    updateImageUrl("");
    fetchFoodDataSuccess("");
  };

  return (
    <div className={classes.root}>
      <Avatar
        alt="avatar"
        src="/broken-image.jpg"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        size="large"
      >
        <PersonIcon />
      </Avatar>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleProfileButton()}>Profile</MenuItem>
        <MenuItem onClick={() => handleLogOut()}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  updateImageUrl: url => dispatch(updateImageUrl(url)),
  fetchFoodDataSuccess: input => dispatch(fetchFoodDataSuccess(input)),
  userLogOut: () => dispatch(userLogOut()),
  toggleProfileOpen: toggle => dispatch(toggleProfileOpen(toggle))
});

const mapStateToProps = state => ({
  isProfileOpen: selectIsProfileOpen(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageAvatars);
