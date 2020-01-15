import React from "react";
import { selectImageUrl } from "../Redux/food/food.selectors";
import { connect } from "react-redux";

const ImageRecognition = ({ imageURL }) => {
  return (
    <div className="ma">
      {!imageURL ? null : (
        <div className="relative ba1-white mt4">
          <img alt="foodPhoto" src={imageURL} width="500px" height="auto" />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  imageURL: selectImageUrl(state)
});
export default connect(mapStateToProps)(ImageRecognition);
