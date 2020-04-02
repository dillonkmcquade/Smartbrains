import React, { useState } from "react";
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";
import { connect } from "react-redux";
import { fetchFoodDataStartAsync } from "../../Redux/food/food.actions";
import "./recent-search.styles.scss";


const RecentSearchDropdown = ({ recentSearch, fetchFoodDataStartAsync }) => {
	const [dropDown, toggleDropDown] = useState(false);
	let currentTime = () => {
        return {__html: new Date()}; 
    }
	return (
		<div className="recent-search-container">
			<ArrowDropDownCircleIcon
				fontSize="large"
				onClick={() => {
					toggleDropDown(!dropDown);
				}}
			/>
			{dropDown ? (
				<div className="dropdown-menu">
					<div className="dropdown-header">
						<p>Recent Searches</p>
						<hr />
					</div>

					{recentSearch.map(item => (
						<div
							className="dropdown-item"
							key={recentSearch.indexOf(item)}
							onClick={() => fetchFoodDataStartAsync(item)}
						>
							<img className="recent-image" src={item} alt="food" />
							<span dangerouslySetInnerHTML={currentTime()}></span>
						</div>
					))}
				</div>
			) : null}
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	fetchFoodDataStartAsync: input => dispatch(fetchFoodDataStartAsync(input))
});

export default connect(null, mapDispatchToProps)(RecentSearchDropdown);
