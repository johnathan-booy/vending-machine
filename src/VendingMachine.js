import React from "react";
import { NavLink } from "react-router-dom";
import Machine from "./images/vending-machine.png";
import "./VendingMachine.css";

const VendingMachine = () => {
	const Style = { backgroundImage: `url(${Machine})` };
	return (
		<div className="VendingMachine" style={Style}>
			<nav>
				<h2>Covid Vending Machine</h2>

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
		</div>
	);
};

export default VendingMachine;
