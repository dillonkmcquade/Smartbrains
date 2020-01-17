import React from "react";
import "./Logo.styles.scss";
import foodifaiLogo from "../../assets/logo_transparent.png";

const Logo = () => {
  return (
    <div className="foodifai-logo">
      <img className="image" src={foodifaiLogo} alt="brain" />
    </div>
  );
};

export default Logo;
