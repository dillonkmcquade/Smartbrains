import React from "react";
import { connect } from "react-redux";
import { selectIngredients } from "../../Redux/food/food.selectors";
import IngredientItem from "../ingredient-item/ingredient-item.component";
import "./ingredientlist.styles.scss";
import { selectIsLoading } from "../../Redux/food/food.selectors";
import LazySpinner from "../lazySpinner/lazy-spinner.component";

const IngredientList = ({ ingredients, isLoading }) => {
	return (
		<div className="ingredient-list">
			<IngredientItem name={"Ingredient"} value={"Probability"} />
			{isLoading ? (
				<LazySpinner />
			) : !ingredients ? null : (
				ingredients.map(({ id, ...otherProps }) => {
					return <IngredientItem key={id} {...otherProps} />;
				})
			)}
		</div>
	);
};

const mapStateToProps = state => ({
	ingredients: selectIngredients(state),
	isLoading: selectIsLoading(state)
});

export default connect(mapStateToProps)(IngredientList);
