import React from "react";

const ImageRecognition = ({ imageURL }) => {
  return (
    <div className="ma">
      {!imageURL ? (
        console.log("no image provided")
      ) : (
        <div className="relative ba1-white mt4">
          <img alt="foodPhoto" src={imageURL} width="500px" height="auto" />
        </div>
      )}
    </div>
  );
};
export default ImageRecognition;
