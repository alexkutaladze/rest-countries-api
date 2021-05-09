import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Country from "./pages/Country";

function App() {
	return (
		<Router>
			<Route exact path="/" component={Home} />
			<Route path="/country/:name" component={Country} />
		</Router>
	);
}

export default App;
