import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { createContext } from "react";
const sharedThemeProps = {
  palette: {
    primary: {
      main: "#179c59",
    },
    secondary: {
      main: "#b079d9",
    },
  },
  typography: {
    fontFamily: "Quicksand",
    h2: {
      fontWeight: "bold",
    },
    h3: {
      fontWeight: "bold",
    },
    h4: {
      fontWeight: "bold",
    },
    h5: {
      fontWeight: "bold",
    },
    h6: {
      fontWeight: "bold",
    },
  },
  overrides: {
    MuiPaper: {
      outlined: {
        borderColor: "grey",
      },
    },
  },
  props: {
    MuiCard: {
      style: {
        padding: 20,
      },
    },
  },
  transitions: {
    duration: {
      complex: 500,
    },
  },
};
export const darkTheme = responsiveFontSizes(
  createMuiTheme({
    ...sharedThemeProps,
    palette: {
      ...sharedThemeProps.palette,
      secondary: {
        main: "#8256a3",
      },
      type: "dark",
      background: {
        paper: "#0D121E",
        default: "#0D121E",
      },
    },
  })
);
export const lightTheme = responsiveFontSizes(createMuiTheme(sharedThemeProps));

const ThemeContext = createContext(null);

export default ThemeContext;
