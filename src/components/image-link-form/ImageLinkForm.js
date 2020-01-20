import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchFoodDataStartAsync } from "../../Redux/food/food.actions";
import "./imagelinkform.styles.scss";

const ImageLinkForm = ({ fetchFoodDataStartAsync }) => {
  const [input, setInput] = useState("");

  return (
    <div className="image-link-form">
      <div>
        <p className="f2 header-text black">
          Insert a photo URL of your favorite food to see what ingredients it
          contains!
        </p>
      </div>
      <div className="center flex bg-light-green bbg pa2 br2">
        <form className="f4 center">
          <input
            className="f4 w-100 pa1 shadow-5"
            type="text"
            placeholder="Insert url here.."
            onChange={event => setInput(event.target.value)}
            required
          />
          <button
            type="button"
            className="f4 grow link dib white pointer bg-green"
            onClick={() => fetchFoodDataStartAsync(input)}
          >
            Detect
          </button>
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchFoodDataStartAsync: input => dispatch(fetchFoodDataStartAsync(input))
});

export default connect(null, mapDispatchToProps)(ImageLinkForm);
