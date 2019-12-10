import React from "react";

const Scroll = props => {
  return (
    <div
      style={{
        overflowY: "scroll",
        height: "600px",
        display: "flex",
        justifyContent: "center"
      }}
      className="pa3"
    >
      {props.children}
    </div>
  );
};

export default Scroll;
