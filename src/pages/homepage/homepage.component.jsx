import React from "react";
import IngredientList from "../../components/ingredient-list/IngredientList";
import ImageRecognition from "../../components/ImageRecognition";
import RingLoaderComponent from "../../components/ringloader";
import Navigation from "../../components/Navigation";
import { connect } from "react-redux";
import { selectIsLoading } from "../../Redux/food/food.selectors";
import ImageLinkForm from "../../components/image-link-form/ImageLinkForm";
import "./homepage.css";

const HomePage = ({ isLoading }) => {
  return (
    <div className="homepage">
      <ImageLinkForm />
      <ImageRecognition />

      {isLoading ? <RingLoaderComponent /> : <IngredientList />}
    </div>
  );
};

const mapStateToProps = state => ({
  isLoading: selectIsLoading(state)
});

export default connect(mapStateToProps)(HomePage);
