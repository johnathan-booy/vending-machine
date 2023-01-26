import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";

function App() {
	return (
		<main className="App">
			<BrowserRouter>
				<Navbar />
				<Route exact path="/">
					<h1>Covid Vending Machine</h1>
				</Route>
				<Route exact path="/toilet-paper">
					<h1>Toilet Paper</h1>
				</Route>
				<Route exact path="/mask">
					<h1>Mask</h1>
				</Route>
				<Route exact path="/hand-sanitizer">
					<h1>Hand Sanitizer</h1>
				</Route>
				<Route exact path="/no-social-life">
					<h1>No Social Life</h1>
				</Route>
			</BrowserRouter>
		</main>
	);
}

export default App;
