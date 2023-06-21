import { createContext } from "react";
import { useSelector } from "react-redux";
import { ThemeProviderProps, ThemeType } from "../types";
import { darkTheme, lightTheme } from "../style/theme";


// Provide an initial/default value for the context
const defaultValue = {}; // You can replace {} with your desired initial value

export const ThemeContext = createContext(defaultValue);

//not really a prop but a context.
function ThemeProvider({ children }: ThemeProviderProps) {
  const theme = useSelector((state: ThemeType) => state.theme.currentTheme);

  return (
    <ThemeContext.Provider value={{ theme }}>
      <div
        className="w-full border"
        style={{
          background:
            theme === "light"
              ? lightTheme.colors.background
              : darkTheme.colors.background,
          color:
            theme === "light" ? lightTheme.colors.text : darkTheme.colors.text,
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
