import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchFoodDataStartAsync } from "../../Redux/food/food.actions";
import "./imagelinkform.styles.scss";

const ImageLinkForm = ({ fetchFoodDataStartAsync }) => {
	const [input, setInput] = useState("");
  console.log(input);
	return (
		<div className="image-link-form">
			<p className="directions">
				Insert a photo URL of your favorite food to see what ingredients it
				contains!
			</p>

			<form className="f4 input-bar">
				<input
					className="f4 search-field shadow-5"
					type="text"
					placeholder="Insert url here.."
					onChange={event => setInput(event.target.value)}
					required
				/>
				<div className="form-submit" onClick={() => fetchFoodDataStartAsync(input)}>
					Detect
				</div>
			</form>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	fetchFoodDataStartAsync: input => dispatch(fetchFoodDataStartAsync(input))
});

export default connect(null, mapDispatchToProps)(ImageLinkForm);
