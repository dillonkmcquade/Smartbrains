import React from "react";

const ImageRecognition = ({ imageURL }) => {
  return (
    <div className="center ma">
      <div className="relative ba1-white mt4">
        <img alt="" src={imageURL} width="500px" height="auto" />
      </div>
    </div>
  );
};

export default ImageRecognition;
