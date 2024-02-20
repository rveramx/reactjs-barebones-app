interface ThemeState {
  currentTheme: "light" | "dark";
  switchTheme: () => void;
}

export default ThemeState;
