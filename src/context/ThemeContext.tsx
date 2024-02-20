import { createContext } from "react";
import ThemeContextProps from "../types/ThemeContextProps";

const ThemeContext = createContext<ThemeContextProps | null>(null);

export default ThemeContext;
