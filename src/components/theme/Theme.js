import { createMuiTheme } from "@material-ui/core/styles";
import { createContext } from "react";
const sharedThemeProps = {
  palette: {
    primary: {
      main: "#b079d9",

    },
    secondary: {
      main: "#44ab78"
    }
  },
  typography: {
    fontFamily: "Quicksand",
  },
};
export const darkTheme = createMuiTheme({
  ...sharedThemeProps,
  palette: {
    ...sharedThemeProps.palette,
    primary:{
      main: "#8256a3"
    },
    type: "dark",
    background: {
      paper: "#0D121E",
      default: "#0D121E",
    },
  },
});
export const lightTheme = createMuiTheme(sharedThemeProps);

const ThemeContext = createContext(null);

export default ThemeContext;
