import React, { useState } from "react";
import { BiMoon } from "react-icons/bi";

const Header = () => {
	const [theme, setTheme] = useState<"Dark" | "Light">("Dark");

	const handleTheme = () => {
		if (theme === "Dark") setTheme("Light");
		else setTheme("Dark");
	};
	return (
		<header>
			<h1 className="header-text">Where in the world?</h1>
			<div className="theme-switcher" onClick={handleTheme}>
				<BiMoon size={24} color={theme === "Dark" ? "#000" : "#fff"} />
				<p className="theme-text">{theme} Mode</p>
			</div>
		</header>
	);
};

export default Header;
