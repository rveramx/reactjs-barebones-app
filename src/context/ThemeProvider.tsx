import useTheme from "../hooks/useTheme";
import ThemeProviderProps from "../types/ThemeProviderProps";
import ThemeContext from "./ThemeContext";

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const { currentTheme, switchTheme } = useTheme();
  return (
    <ThemeContext.Provider value={{ currentTheme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
