import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
//import { findChild } from "../../mockdata/children";
import Playground from "./AutoCompleteSearch";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: 400,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  })
);

export default function DashBoardSearch() {
  const classes = useStyles();

  const search = (e: any) => {
    console.log(e.target.value);
  };

  return (
    <>
      <Paper component="form" className={classes.root}>
        <InputBase className={classes.input} placeholder="First Last" onClick={(e) => search(e)} />
        <IconButton className={classes.iconButton} aria-label="search" onClick={(e) => search(e)}>
          <SearchIcon />
        </IconButton>
      </Paper>
      <Playground />
    </>
  );
}
