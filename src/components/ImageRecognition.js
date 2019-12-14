import React from "react";
import Error from "./Error";

const ImageRecognition = ({ imageURL }) => {
  return (
    <div className="ma">
      {!imageURL ? (
        <Error message={"please include valid URL!"} />
      ) : (
        <div className="relative ba1-white mt4">
          <img alt="foodPhoto" src={imageURL} width="500px" height="auto" />
        </div>
      )}
    </div>
  );
};
export default ImageRecognition;
