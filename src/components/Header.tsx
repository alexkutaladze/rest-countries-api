import React, { useState, useContext } from "react";
import { BiMoon, BiSun } from "react-icons/bi";
import { useHistory } from "react-router";
import {
	Heading,
	Paragraph,
	ThemeSwitcher,
	Header,
} from "../style/HeaderStyles";
import ThemeContext from "../style/theme/themeContext";

const HeaderComponent = () => {
	const history = useHistory();
	const { theme, setTheme } = useContext(ThemeContext);

	const handleTheme = () => {
		if (theme === "Dark") setTheme("Light");
		else setTheme("Dark");
	};
	return (
		<Header>
			<Heading onClick={() => history.push("/")}>
				Where in the world?
			</Heading>
			<ThemeSwitcher onClick={handleTheme}>
				{theme === "Dark" ? (
					<BiSun size={24} color="#fff" />
				) : (
					<BiMoon size={24} color="#000" />
				)}
				<Paragraph>
					{theme === "Dark" ? "Light" : "Dark"} Mode
				</Paragraph>
			</ThemeSwitcher>
		</Header>
	);
};

export default HeaderComponent;
