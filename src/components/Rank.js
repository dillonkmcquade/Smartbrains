import React from "react";

const Rank = ({ ingredientData }) => {
  return (
    <div>
      {console.log(ingredientData)}
      <div className="white f3">"#1 ingredient is..."</div>
      <div className="white f1">{ingredientData[0].name}</div>
    </div>
  );
};

export default Rank;
