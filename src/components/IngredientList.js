import React from "react";
import Recognition from "./Recognition.js";

const IngredientList = ({ ingredients }) => {
  return (
    <div className="ma6 pa3">
      {ingredients.map((id, i) => {
        return (
          <Recognition
            name={ingredients[i].name}
            value={ingredients[i].value}
          />
        );
      })}
    </div>
  );
};

export default IngredientList;
