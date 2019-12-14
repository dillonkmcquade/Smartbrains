import React from "react";
import Logo from "./Logo";

const Navigation = ({ onRouteChange }) => {
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
          onClick={() => onRouteChange("signin")}
          className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-green pointer"
        >
          Sign Out
        </p>
      </div>
    </nav>
  );
};

export default Navigation;
