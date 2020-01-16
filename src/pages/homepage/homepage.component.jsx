import React from "react";
import IngredientList from "../../components/IngredientList";
import ImageRecognition from "../../components/ImageRecognition";
import Scroll from "../../components/Scroll";
import RingLoaderComponent from "../../components/ringloader";
import Navigation from "../../components/Navigation";
import {connect} from 'react-redux';
import {selectIsLoading} from '../../Redux/food/food.selectors';
import ImageLinkForm from '../../components/image-link-form/ImageLinkForm';

const HomePage = ({isLoading}) => {
  return (
    <div>
      <Navigation />
      <ImageLinkForm />
      <ImageRecognition />
      <Scroll>
        {isLoading ? <RingLoaderComponent /> : <IngredientList />}
      </Scroll>
    </div>
  );
};

const mapStateToProps = state => ({
    isLoading: selectIsLoading(state)   
});

export default connect(mapStateToProps)(HomePage);
