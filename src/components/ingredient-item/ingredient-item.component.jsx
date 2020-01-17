import React from "react";
import "tachyons";
import './ingredient-item.styles.scss';

const IngredientItem = ({ name, value }) => {
  const probability = Math.floor(value * 100);
  return (
    <div className="ingredient-item">
      <div className="ingredient-name">{name}</div>
      <div className="ingredient-value">{value == 'Probability' ? value : probability + '%'}</div>
    </div>
  );
};

export default IngredientItem;
