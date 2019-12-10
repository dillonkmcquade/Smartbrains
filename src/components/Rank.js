import React from "react";

const Rank = ({ingredientlist}) => {
  return (
    <div>
      <div className="white f3">{"#1 ingredient is..."}</div>
      <div className="white f1">{ingredientlist[0].name}</div>
    </div>
  );
};

export default Rank;
