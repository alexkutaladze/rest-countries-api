import { createContext } from "react";

interface ThemeProps {
	state: "Dark" | "Light";
	dispatch: React.Dispatch<React.SetStateAction<"Dark" | "Light">>;
}

const ThemeContext = createContext({} as any);

export default ThemeContext;
