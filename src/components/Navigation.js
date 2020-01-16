import React from "react";
import Logo from "./logo/Logo";
import { connect } from "react-redux";
import {
  updateImageUrl,
  fetchFoodDataSuccess
} from "../Redux/food/food.actions";
import {userLogOut} from '../Redux/user/user.actions';

const Navigation = ({
  updateImageUrl,
  fetchFoodDataSuccess,
  userLogOut
}) => {
  return (
    <nav
      className="dt w-100 border-box"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <div className="pa1 dim">
        <Logo />
      </div>
      <div className="ph3">
        <p
          onClick={() => {
            userLogOut();
            updateImageUrl("");
            fetchFoodDataSuccess("");
          }}
          className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-green pointer"
        >
          Sign Out
        </p>
      </div>
    </nav>
  );
};

const mapDispatchToProps = dispatch => ({
  updateImageUrl: url => dispatch(updateImageUrl(url)),
  fetchFoodDataSuccess: input => dispatch(fetchFoodDataSuccess(input)),
  userLogOut: () => dispatch(userLogOut())
});

export default connect(null, mapDispatchToProps)(Navigation);
