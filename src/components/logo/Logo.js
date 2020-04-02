import React from "react";
import "./Logo.styles.scss";
import foodifaiLogo from "../../assets/logo_transparent.png";
import { Link } from "react-router-dom";

const Logo = () => {
	return (
		<Link to="/homepage" className="foodifai-logo">
			<img className="image" src={foodifaiLogo} alt="brain" />
		</Link>
	);
};

export default Logo;
