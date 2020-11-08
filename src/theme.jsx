import { createMuiTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: "#00e676",
      contrastText: blue[900],
    },
    headerStyle:{
      main: "#4dabf5",
    }
  },
});

theme.props = {
  MuiButton: {
    disableElevation: true,
  },
  MuiInputLabel: {
    shrink: true,
  },
  MuiInput: {
    disableUnderline: true,
  },
  MuiTooltip: {
    arrow: true,
  },

};

theme.overrides = {
  MuiTable:{
    MuiToolbar:{
      root:{
        backgroundColor: theme.palette.primary.main,
        color: '#2c387e',
      },
    },
  },
  MuiPaper:{
    root:{
      elevation: 10,
    },
  },
  MuiToolbar:{
    root:{
      backgroundColor: theme.palette.primary.main,
      color: '#ffffff',
    },
  },
  MuiButton: {
    root: {
      borderRadius: 0,
      textTransform: 'none',
    },
    containedPrimary: {
      '&:hover': {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.primary.dark,
      },
    },
    containedSecondary: {
      fontWeight: 700,
    },
  },
  MuiInputLabel: {
    root: {
      textTransform: 'uppercase',
      fontSize: '1.5rem',
    },
  },
  MuiInput: {
    root: {
      // color: '#ffffff',
      // top: theme.spacing(2),
      // border: `1px solid ${grey[500]}`,
      // outline: `1px solid transparent`,
      // padding: theme.spacing(1),
      // '&$focused': {
      //   border: `1px solid ${theme.palette.primary.main}`,
      //   outline: `1px solid ${theme.palette.primary.main}`,
      // },
    },
  },
  MuiTooltip: {
    tooltip: {
      backgroundColor: '#fff',
      border: `2px solid ${theme.palette.primary.main}`,
      color: theme.palette.primary.main,
    },
    arrow: {
      color: theme.palette.primary.main,
    },
  },
};

export default theme;
// import red from "@material-ui/core/colors/red";
// import { createMuiTheme } from "@material-ui/core/styles";

// export const appBarHeight = 128;

// // A custom theme for this app
// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       main: "#009BE5",
//     },
//     secondary: {
//       main: "#1FAA00",
//     },
//     error: {
//       main: red.A400,
//     },
//     background: {
//       default: "#fff",
//     },
//   },
//   mixins: {
//     toolbar: {
//       minHeight: 150,
//     },
//   },
// });

// export default theme;
