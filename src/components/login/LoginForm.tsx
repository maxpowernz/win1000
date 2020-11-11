import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { FormControlLabel } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import FormHelperText from "@material-ui/core/FormHelperText/FormHelperText";
import { Alert, AlertTitle } from "@material-ui/lab";
import Background from "../../Media/pexels-craig-adderley-1835927.jpg";
import RealMeLogo from "../../Media/realme.jpg";
import { useAppState } from "../../AppStateContext";
import { Redirect } from "react-router-dom";

const loginCardWidth = 350;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: `url(${Background})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      // background: 'linear-gradient(107.89deg, #009BE5 1.72%, #27AE60 109.59%)', // Gradient
      display: "flex",
      height: "100vh",
      alignItems: "center",
      // flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
      paddingRight: theme.spacing(2),
    },
    alert: {
      margin: theme.spacing(1),
      padding: theme.spacing(2),
    },
    copyright: {
      margin: theme.spacing(1),
      padding: theme.spacing(2),
    },
    marginRegisterLink: {
      // margin: theme.spacing(1),
      // paddingRight: theme.spacing(2),
    },
    marginCheckBox: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: "25ch",
    },
    buttons: {
      display: "flex",
    },
    formBG: {
      backgroundColor: "#FFFFFF",
    },
    layout: {
      width: "auto",
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(loginCardWidth + theme.spacing(2) * 2)]: {
        width: loginCardWidth,
        marginLeft: "auto",
        marginRight: "auto",
      },
    },
    paper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(loginCardWidth + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
      },
    },
  })
);

interface State {
  username: string;
  password: string;
  isRemembered: boolean;
  isUsernameValid: boolean;
  isPasswordValid: boolean;
  weightRange: string;
  showPassword: boolean;
  isFailed: boolean;
}

export default function LoginForm(props: any) {
  const classes = useStyles();
  const { state } = useAppState();
  const { handleLogin } = props;
  //const history = useHistory();

  const [values, setValues] = React.useState<State>({
    username: "",
    password: "",
    isRemembered: false,
    isUsernameValid: true,
    isPasswordValid: true,
    weightRange: "",
    showPassword: false,
    isFailed: false,
  });

  function Copyright() {
    return (
      <Typography
        variant="body2"
        color="textSecondary"
        align="center"
        className={classes.copyright}>
        <Link color="inherit" href="#">
          By logging in, you are agreeing to WIN1000’s Terms of Services.
        </Link>
      </Typography>
    );
  }

  const handleChangeCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.checked });
  };

  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <>
      {state.userLoggedIn && <Redirect to="/admin" />}
      <div className={classes.root}>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <div className={classes.formBG}>
              <Typography className={classes.margin} component="h1" variant="h4" align="center">
                Login
              </Typography>

              <FormControl fullWidth className={classes.margin} variant="filled">
                <InputLabel htmlFor="filled-adornment-username">Username</InputLabel>
                <FilledInput
                  error={values.username.length < 3 && values.username.length > 0}
                  id="filled-adornment-username"
                  value={values.username}
                  onChange={handleChange("username")}
                />
                <FormHelperText id="filled-adornment-password">
                  More then 3 alphnumeric characters
                </FormHelperText>
              </FormControl>
              <FormControl fullWidth className={classes.margin} variant="filled">
                <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                <FilledInput
                  error={values.password.length < 3 && values.password.length > 0}
                  id="filled-adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end">
                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <FormHelperText id="filled-adornment-password">
                  More then 3 alphnumeric characters
                </FormHelperText>
              </FormControl>
              <FormControlLabel
                className={classes.marginCheckBox}
                control={
                  <Checkbox
                    color="primary"
                    checked={values.isRemembered}
                    onChange={handleChangeCheckBox}
                    name="isRemembered"
                  />
                }
                label="Remember Me"
              />
              <Button
                fullWidth
                className={classes.buttons}
                variant="contained"
                color="primary"
                onClick={handleLogin}>
                Login
              </Button>
              <Grid item container alignContent="center" justify="center">
                <img src={RealMeLogo} width="100" alt="logo" />
              </Grid>
              <Grid className={classes.margin} container justify="center">
                <Grid justify="center">
                  <Typography variant="body2">
                    <Link
                      href="/admin"
                      // onClick={preventDefault}
                      color="inherit">
                      {"Forgot password?"}
                    </Link>
                  </Typography>
                </Grid>
              </Grid>

              <Copyright />
            </div>
            {values.isFailed ? (
              <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                Login Failed
              </Alert>
            ) : (
              <> </>
            )}
          </Paper>
        </main>
      </div>
    </>
  );
}
