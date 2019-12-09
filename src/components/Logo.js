import React from "react";
import Tilt from "react-tilt";
import "./Logo.css";
import brain from "./brain.png";

const Logo = () => {
  return (
    <div>
      <Tilt
        className="Tilt br4 shadow-5 pointer ma4"
        options={{ max: 55 }}
        style={{ height: 100, width: 120 }}
      >
        <div className="Tilt-inner">
          <img src={brain} alt="brain" style={{ height: "100px" }} />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
