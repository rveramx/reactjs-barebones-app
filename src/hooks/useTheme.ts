import ThemeState from "../types/ThemeState";
import { useState } from "react";

const useTheme = (): ThemeState => {
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("light");
  const switchTheme = () => {
    setCurrentTheme((previousTheme) =>
      previousTheme === "light" ? "dark" : "light"
    );
  };

  return { currentTheme, switchTheme };
};

export default useTheme;
