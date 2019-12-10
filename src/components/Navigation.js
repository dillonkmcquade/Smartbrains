import React from "react";
import Logo from "./Logo";

const Navigation = ({ onRouteChange, onSignOut }) => {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between" }}>
      <Logo className="pa2" />
      <p
        onClick={() => onRouteChange("signin")}
        className="f3 link dim white underline pa3 pointer"
      >
        Sign Out
      </p>
    </nav>
  );
};

export default Navigation;
