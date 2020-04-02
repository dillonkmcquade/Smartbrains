import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchFoodDataStartAsync } from "../../Redux/food/food.actions";
import "./imagelinkform.styles.scss";
import RecentSearchDropdown from "../recent-search-dropdown/recent-search.component";

const ImageLinkForm = ({ fetchFoodDataStartAsync }) => {
	const [input, setInput] = useState("");
	const [recentSearch, saveSearch] = useState([]);
	const handleSubmit = input => {
		fetchFoodDataStartAsync(input);
		saveSearch(recentSearch.concat(input));
		console.log(recentSearch);
	};
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
				<div className="form-submit" onClick={() => handleSubmit(input)}>
					Detect
				</div>
				<RecentSearchDropdown recentSearch={recentSearch} />
			</form>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	fetchFoodDataStartAsync: input => dispatch(fetchFoodDataStartAsync(input))
});

export default connect(null, mapDispatchToProps)(ImageLinkForm);
