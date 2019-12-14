import React from "react";

const Error = ({ message }) => {
  return (
    <div className="bg-red">
      <p className="white">{message}</p>
    </div>
  );
};

export default Error;
