import React from "react";
import clsx from "clsx";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import IconButton from "@material-ui/core/IconButton/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Visibility } from "@material-ui/icons";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme: any) =>
  createStyles({
    root: {
      //padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: 400,
      border: "none",
    },

    input: {
      flex: 1,
      padding: 0,
    },
    iconButton: {
      padding: 10,
    },
  })
);
export default function ComboBox() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Autocomplete
        id="combo-box-demo"
        className={classes.root}
        //disableClearable
        //forcePopupIcon={false}
        options={children}
        getOptionLabel={(option) => option.lastName + ", " + option.firstName}
        renderInput={(params) => {
          return (
            <TextField
              {...params}
              className={classes.input}
              variant="outlined"
              placeholder="Lastname"
              //classes={{ root: textClasses.formControlRoot }}
              // InputProps={{
              //   ...params.InputProps,
              //   endAdornment: (
              //     <InputAdornment position="end">
              //       <SearchIcon color="disabled" />
              //     </InputAdornment>
              //   ),
              // }}
              //InputLabelProps={{ classes: {root: textClasses.inputLabelRoot}}}
            />
          );
        }}
      />
    </Paper>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const children = [
  {
    firstName: "Hine",
    lastName: "Jones",
  },
  {
    firstName: "Lulu",
    lastName: "Guilford",
  },
];
