import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Box, Button, Grid, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import childList from "../../mockdata/mockchildren.json";
import { Child } from "../../shared/interfaces/child.interface";
import { formatDate } from "../../utils/dateUtils";

const useStyles = makeStyles(() =>
  createStyles({
    textField: {
      width: 400,
      "& .MuiAutocomplete-inputRoot": {
        //padding: theme.spacing(1),
      },
      flexGrow: 1,
    },
  })
);

export default function ComboBox() {
  const classes = useStyles();
  const history = useHistory();
  const [disabled, setDisabled] = useState(true);
  const [childId, setChildId] = useState<null | number>(null);

  const handleChange = (event: any, child: Child | null) => {
    if (child === null) {
      setDisabled(true);
      setChildId(null);
    } else {
      setDisabled(false);
      setChildId(child.childId);
    }
  };

  const handleClick = () => {
    console.log(childId);

    return history.push(`/admin/child/${childId}`);
  };
  const children: any = childList.children;

  return (
    <div>
      <Typography variant="h5" color="textSecondary">
        Search Children
      </Typography>
      <Box marginY={1}></Box>
      <Grid container spacing={3} alignItems="flex-end">
        <Grid item>
          <Autocomplete
            id="combo-box-demo"
            onChange={handleChange}
            options={children}
            className={classes.textField}
            getOptionLabel={(option: Child) =>
              option.firstName + " " + option.lastName + " - " + formatDate(option.dateOfBirth)
            }
            renderInput={(params) => {
              return <TextField {...params} variant="outlined" placeholder="Lastname" />;
            }}
          />
        </Grid>
        <Grid item>
          <Button onClick={handleClick} variant="contained" color="secondary" disabled={disabled}>
            View Child
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
