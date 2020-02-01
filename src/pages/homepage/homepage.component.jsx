import React from "react";
import IngredientList from "../../components/ingredient-list/IngredientList";
import ImageRecognition from "../../components/image-recognition/ImageRecognition";
import RingLoaderComponent from "../../components/ring-loader/ringloader";
import { connect } from "react-redux";
import { selectIsLoading } from "../../Redux/food/food.selectors";
import ImageLinkForm from "../../components/image-link-form/ImageLinkForm";
import "./homepage.styles.scss";

const HomePage = ({ isLoading }) => {
  return (
    <div className="homepage">
      <div className="image-form">
        <ImageLinkForm />
        <ImageRecognition />
      </div>
      <div className='ingredient-list-container'>{isLoading ? <RingLoaderComponent /> : <IngredientList />}</div>
    </div>
  );
};

const mapStateToProps = state => ({
  isLoading: selectIsLoading(state)
});

export default connect(mapStateToProps)(HomePage);
