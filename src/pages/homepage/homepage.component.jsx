import React from "react";
import IngredientList from "../../components/ingredient-list/IngredientList";
import ImageRecognition from "../../components/image-recognition/ImageRecognition";
import RingLoaderComponent from "../../components/ringloader";
import { connect } from "react-redux";
import { selectIsLoading } from "../../Redux/food/food.selectors";
import ImageLinkForm from "../../components/image-link-form/ImageLinkForm";
import "./homepage.css";

const HomePage = ({ isLoading }) => {
  return (
    <div className="homepage">
      <div className='image-form'>
        <ImageLinkForm />
        <ImageRecognition />
      </div>
      {isLoading ? <RingLoaderComponent /> : <IngredientList />}
    </div>
  );
};

const mapStateToProps = state => ({
  isLoading: selectIsLoading(state)
});

export default connect(mapStateToProps)(HomePage);
