import React, { useState } from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Country from "./pages/Country";
import { ThemeProvider } from "styled-components";
import DarkTheme from "./style/theme/darkTheme.json";
import LightTheme from "./style/theme/lightTheme.json";
import ThemeContext from "./style/theme/themeContext";

function App() {
	const [theme, setTheme] = useState<"Dark" | "Light">("Dark");
	return (
		<ThemeProvider theme={theme === "Dark" ? DarkTheme : LightTheme}>
			<ThemeContext.Provider value={{ theme, setTheme }}>
				<Router>
					<Route exact path="/" component={Home} />
					<Route path="/country/:name" component={Country} />
				</Router>
			</ThemeContext.Provider>
		</ThemeProvider>
	);
}

export default App;
