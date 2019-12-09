import React from "react";
import Tilt from "react-tilt";
import "./Logo.css";
import brain from "./brain.png";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br4 shadow-5 pointer"
        options={{ max: 55 }}
        style={{ height: 100, width: 120 }}
      >
        <div className="Tilt-inner">
          <img
            src={brain}
            alt="brain"
            style={{
              height: "100px",
              paddingLeft: "10px"
            }}
          />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
