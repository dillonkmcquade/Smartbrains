import React from "react";
import Recognition from "./Recognition.js";
import Error from "./Error";

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
        ? console.log("no ingredients provided")
        : ingredients.map((id, i) => {
            return (
              <div>
                <Recognition
                  name={ingredients[i].name}
                  value={Math.floor(ingredients[i].value * 100) + "%"}
                />
              </div>
            );
          })}
      )} ; })}
    </div>
  );
};

export default IngredientList;
