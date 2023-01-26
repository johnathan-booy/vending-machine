import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav>
			<NavLink exact to="/">
				Vending Machine
			</NavLink>
			<NavLink exact to="/toilet-paper">
				Toilet Paper
			</NavLink>
			<NavLink exact to="/mask">
				Mask
			</NavLink>
			<NavLink exact to="/hand-sanitizer">
				Hand Sanitizer
			</NavLink>
			<NavLink exact to="/no-social-life">
				No Social Life
			</NavLink>
		</nav>
	);
};

export default Navbar;
