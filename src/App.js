import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Item from "./Item";
import VendingMachine from "./VendingMachine";
import ToiletPaper from "./images/toilet-paper.png";
import Mask from "./images/mask.png";
import HandSanitizer from "./images/hand-sanitizer.png";
import NoSocialLife from "./images/no-social-life.png";
import Machine from "./images/vending-machine.png";

function App() {
	return (
		<main className="App">
			<BrowserRouter>
				<Route exact path="/">
					<VendingMachine />
				</Route>
				<Route exact path="/toilet-paper">
					<Item name="Toilet Paper" image={ToiletPaper} />
				</Route>
				<Route exact path="/mask">
					<Item name="Mask" image={Mask} />
				</Route>
				<Route exact path="/hand-sanitizer">
					<Item name="Hand Sanitizer" image={HandSanitizer} />
				</Route>
				<Route exact path="/no-social-life">
					<Item name="No Social Life" image={NoSocialLife} />
				</Route>
			</BrowserRouter>
		</main>
	);
}

export default App;
