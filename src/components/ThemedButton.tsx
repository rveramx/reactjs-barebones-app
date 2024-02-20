import useThemeContext from "../hooks/useThemeContext";

const ThemedButton: React.FC = () => {
  const { currentTheme, switchTheme } = useThemeContext();
  const buttonText =
    currentTheme === "light" ? "Switch to Dark" : "Switch to Light";

  return (
    <button
      style={{
        backgroundColor: currentTheme === "light" ? "#FFF" : "#333",
        color: currentTheme === "light" ? "#333" : "#FFF",
      }}
      onClick={switchTheme}
    >
      {buttonText}
    </button>
  );
};

export default ThemedButton;
