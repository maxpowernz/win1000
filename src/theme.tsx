import red from "@material-ui/core/colors/red";
import grey from "@material-ui/core/colors/grey";
import { createMuiTheme, ThemeOptions } from "@material-ui/core/styles";

const primaryMain = "#009BE5";
const secondaryMain = "#1FAA00";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryMain,
    },
    secondary: {
      main: secondaryMain,
    },
    error: {
      main: red.A400,
    },
  },
  mixins: {
    toolbar: {
      minHeight: 100,
    },
  },
  custom: {},
} as ThemeOptions);

// export interface XTheme extends Theme {
//   aboveTableHeading: {
//     fontSize: 24;
//   };
// }

// interface XThemeOptions extends ThemeOptions {
//   aboveTableHeading: {
//     fontSize: 24;
//   };
// }

export default theme;
