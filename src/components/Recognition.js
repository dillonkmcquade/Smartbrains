import React from "react";
import "tachyons";

const Recognition = ({ name, value }) => {
  return (
    <div
      className="pa3  ma3 shadow-5 bg-light-green tc f3"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div className="pr4 f3 w-50">{name}</div>
      <div className="pl4 f3 w-50">{value}</div>
    </div>
  );
};

export default Recognition;
