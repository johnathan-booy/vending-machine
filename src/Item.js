import React from "react";
import { NavLink } from "react-router-dom";
import "./Item.css";

const Item = ({ name, image }) => {
	const Style = { backgroundImage: `url(${image})` };

	return (
		<div className="Item" style={Style}>
			<nav>
				<h2 className="Item-name">{name}</h2>
				<NavLink exact to="/">
					Go Back
				</NavLink>
			</nav>
		</div>
	);
};

export default Item;
