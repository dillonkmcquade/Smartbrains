import React from "react";
import Recognition from "./Recognition.js";
import { connect } from "react-redux";
import { selectIngredients } from "../Redux/food/food.selectors";

const IngredientList = ({ ingredients }) => {
  return (
    <div className="mt0">
      <div
        className="pa3 br-pill ma3 shadow-5 bg-gray f3"
        style={{
          display: "flex",
          flexDirection: "row"
        }}
      >
        <div className="tc pl4 w-50">Ingredient</div>
        <div className="tc pl4 w-50">Probability</div>
      </div>
      {!ingredients
        ? ""
        : ingredients.map((id, i) => {
            return (
              <div>
                <Recognition
                  id={ingredients[i].id}
                  name={ingredients[i].name}
                  value={Math.floor(ingredients[i].value * 100) + "%"}
                />
              </div>
            );
          })}
    </div>
  );
};

const mapStateToProps = state => ({
  ingredients: selectIngredients(state)
});

export default connect(mapStateToProps)(IngredientList);
