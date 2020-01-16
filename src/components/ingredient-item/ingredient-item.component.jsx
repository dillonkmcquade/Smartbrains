import React from "react";
import "tachyons";
import './ingredient-item.css';

const IngredientItem = ({ name, value }) => {
  return (
    <div className="ingredient-item">
      <div className="ingredient-name">{name}</div>
      <div className="ingredient-value">{Math.floor(value * 100)}%</div>
    </div>
  );
};

export default IngredientItem;
