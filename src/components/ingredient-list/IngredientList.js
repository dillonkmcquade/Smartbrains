import React from "react";
import { connect } from "react-redux";
import { selectIngredients } from "../../Redux/food/food.selectors";
import IngredientItem from "../ingredient-item/ingredient-item.component";
import './ingredientlist.styles.scss';

const IngredientList = ({ ingredients }) => {
  return (
    <div className="ingredient-list">
      <IngredientItem name={"Ingredient"} value={"Probability"} />
      {!ingredients
        ? ""
        : ingredients.map(({ id, ...otherProps }) => {
            return <IngredientItem key={id} {...otherProps} />;
          })}
    </div>
  );
};

const mapStateToProps = state => ({
  ingredients: selectIngredients(state)
});

export default connect(mapStateToProps)(IngredientList);
