import React, { lazy, Suspense } from "react";
import RingLoaderComponent from "../../components/ring-loader/ringloader";
import { connect } from "react-redux";
import { selectIsLoading } from "../../Redux/food/food.selectors";
import "./homepage.styles.scss";

const IngredientList = lazy(() =>
  import("../../components/ingredient-list/IngredientList")
);
const ImageRecognition = lazy(() =>
  import("../../components/image-recognition/ImageRecognition")
);
const ImageLinkForm = lazy(() =>
  import("../../components/image-link-form/ImageLinkForm")
);

const HomePage = ({ isLoading }) => {
  return (
    <div className="homepage">
      <div className="image-form">
        <Suspense fallback={<RingLoaderComponent />}>
          <ImageLinkForm />
          <ImageRecognition />
        </Suspense>
      </div>
      <div className="ingredient-list-container">
        <Suspense fallback={<RingLoaderComponent />}>
          <IngredientList />
        </Suspense>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  isLoading: selectIsLoading(state)
});

export default connect(mapStateToProps)(HomePage);
