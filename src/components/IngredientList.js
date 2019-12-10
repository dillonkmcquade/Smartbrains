import React from "react";
import Recognition from "./Recognition.js";

const IngredientList = ({ ingredients, imageURL }) => {
  
    return (
      <div className="mt0">
        <div
          className="pa2 br-pill shadow-5 bg-gray tc f2"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="pl4 w-50">Ingredient</div>
          <div className="pl4 w-50">Probability</div>
        </div>
        {ingredients.map((id, i) => {
          return (
            <Recognition
              name={ingredients[i].name}
              value={ingredients[i].value}
            />
          );
        })}
      </div>
    )};


export default IngredientList;
