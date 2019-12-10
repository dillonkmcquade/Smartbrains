import React from "react";
import Recognition from "./Recognition.js";

const IngredientList = ({ ingredients }) => {
  return (
    <div className="mt0">
      <div
        className="pa2 br-pill shadow-5 bg-gray f2"
        style={{
          display: "flex",
          flexDirection: "row"
        }}
      >
        <div className="pl4 w-50">Ingredient</div>
        <div className="pl4 w-50">Probability</div>
      </div>
      {ingredients.map((id, i) => {
        return (
          <Recognition
            name={ingredients[i].name}
            value={Math.floor(ingredients[i].value * 100) + "%"}
          />
        );
      })}
    </div>
  );
};

export default IngredientList;
