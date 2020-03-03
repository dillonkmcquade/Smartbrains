import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import PersonIcon from "@material-ui/icons/Person";
import {
  updateImageUrl,
  fetchFoodDataSuccess
} from "../../Redux/food/food.actions";
import { userLogOut } from "../../Redux/user/user.actions";
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

const ImageAvatars = ({ userLogOut, updateImageUrl, fetchFoodDataSuccess }) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem
          onClick={() => {
            userLogOut();
            updateImageUrl("");
            fetchFoodDataSuccess("");
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  updateImageUrl: url => dispatch(updateImageUrl(url)),
  fetchFoodDataSuccess: input => dispatch(fetchFoodDataSuccess(input)),
  userLogOut: () => dispatch(userLogOut())
});

export default connect(null, mapDispatchToProps)(ImageAvatars);
