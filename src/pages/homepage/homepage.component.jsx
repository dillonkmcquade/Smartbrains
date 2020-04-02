import React, { lazy, Suspense } from "react";
import LazySpinner from '../../components/lazySpinner/lazy-spinner.component';
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

const HomePage = () => {
	return (
		<div className="homepage">
			<Suspense fallback={<LazySpinner />}>
				<ImageLinkForm />
				<ImageRecognition />
				<IngredientList />
			</Suspense>
		</div>
	);
};

export default HomePage;
