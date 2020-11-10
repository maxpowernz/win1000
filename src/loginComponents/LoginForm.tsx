import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { FormControlLabel } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox/Checkbox';
import Button from '@material-ui/core/Button/Button';
import Typography from '@material-ui/core/Typography/Typography';
import Link from '@material-ui/core/Link/Link';
import Grid from '@material-ui/core/Grid/Grid';
import Paper from '@material-ui/core/Paper/Paper';
import AppBar from '@material-ui/core/AppBar/AppBar';
import Toolbar from '@material-ui/core/Toolbar/Toolbar';
import FormHelperText from '@material-ui/core/FormHelperText/FormHelperText';
import { Alert, AlertTitle } from '@material-ui/lab';
import { useHistory } from "react-router-dom";

const loginCardWidth = 350;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
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
      width: '25ch',
    },
    buttons: {
      display: 'flex',
    },
    layout: {
      width: 'auto',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(loginCardWidth + theme.spacing(2) * 2)]: {
        width: loginCardWidth,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    appBar: {
      // display: 'flex',
      position: 'static',
      backgroundColor: theme.palette.primary.main,
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
  }),
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



export default function LoginForm() {
  const classes = useStyles();
  const history = useHistory();

  const [values, setValues] = React.useState<State>({
    username: '',
    password: '',
    isRemembered: false,
    isUsernameValid: true,
    isPasswordValid: true,
    weightRange: '',
    showPassword: false,
    isFailed: false,
  });

  function Copyright() {
    return (
      <Typography
        variant="body2"
        color="textSecondary"
        align="center"
        className = {classes.copyright}
      >
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

  const handleNext = () => {
    return history.push(`/admin/`);
    // setActiveStep(activeStep + 1);
  };

  return (
    <>
      <AppBar position="absolute" color="primary" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h4"
          // color="inherit" 
          // noWrap
          >
            WIN1000
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.root}>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <div className={classes.root}>
              <div>
                <Typography
                  className={classes.margin}
                  component="h1"
                  variant="h4"
                  align="center"
                >
                  Login
          </Typography>

                <FormControl fullWidth className={classes.margin} variant="filled">
                  <InputLabel htmlFor="filled-adornment-username">Username</InputLabel>
                  <FilledInput
                    error={values.username.length < 3 && values.username.length > 0}
                    id="filled-adornment-username"
                    value={values.username}
                    onChange={handleChange('username')}
                  />
                  <FormHelperText id="filled-adornment-password">More then 3 alphnumeric characters</FormHelperText>
                </FormControl>
                <FormControl fullWidth className={classes.margin} variant="filled">
                  <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                  <FilledInput
                    error={values.password.length < 3 && values.password.length > 0}
                    id="filled-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  <FormHelperText id="filled-adornment-password">More then 3 alphnumeric characters</FormHelperText>
                </FormControl>
                <FormControlLabel
                  className={classes.marginCheckBox}

                  control={<Checkbox
                    color="primary"
                    checked={values.isRemembered}
                    onChange={handleChangeCheckBox}
                    name="isRemembered" />}
                  label="Remember Me"
                />
                <Button fullWidth
                  className={classes.buttons}
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                >
                  Login
        </Button>
                <Grid
                  className={classes.margin}
                  container
                >
                  <Grid item xs={6}>
                    <Typography
                      variant="body2"
                    >
                      <Link href="#"
                        // onClick={preventDefault} 
                        color="inherit">
                        {'Forget password'}
                      </Link>
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      variant="body2"
                    >
                      <Link href="#"
                        // onClick={preventDefault} 
                        color="inherit">
                        {'No registered yet?'}
                      </Link>
                    </Typography>
                  </Grid>
                </Grid>
                <Copyright
                />
              </div>
            </div>
            { values.isFailed
             ? 
             <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
                Login Failed
            </Alert>
            :
            <> </>
            }
          </Paper>
        </main>
      </div>
    </>
  );
}
