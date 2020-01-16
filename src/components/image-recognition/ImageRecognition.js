import React from "react";
import { selectImageUrl } from "../../Redux/food/food.selectors";
import { connect } from "react-redux";
import "./image-recognition.css";

const ImageRecognition = ({ imageURL }) => {
  return (
    <div className="image-recognition">
      {!imageURL ? null : <img alt="foodPhoto" src={imageURL} />}
    </div>
  );
};

const mapStateToProps = state => ({
  imageURL: selectImageUrl(state)
});
export default connect(mapStateToProps)(ImageRecognition);
