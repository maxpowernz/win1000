import red from "@material-ui/core/colors/red";
import { createMuiTheme } from "@material-ui/core/styles";

export const appBarHeight = 128;

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#009BE5",
    },
    secondary: {
      main: "#1FAA00",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
  mixins: {
    toolbar: {
      minHeight: 150,
    },
  },
});

export default theme;
