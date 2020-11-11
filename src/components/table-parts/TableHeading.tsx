import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { IconButton } from "@material-ui/core";
import { Add } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    TableHeading: {
      fontSize: 24,
      backgroundColor: theme.palette.grey[100],
      color: theme.palette.primary.main,
    },
  })
);

interface TableHeadingProps {
  heading: string;
  color?: string;
  onAdd?(): any;
}

export default function TableHeading(props: TableHeadingProps) {
  const classes = useStyles();

  return (
    <>
    <Box className={classes.TableHeading} paddingX={4} paddingY={1.5}>
        <Typography variant="inherit" style={{ color: props.color }}>
          {props.heading}
        </Typography>
        {
          props.onAdd ? 
          <IconButton  
          color = "primary"
          onClick = {props.onAdd}
          >
            <Add/>
          </IconButton>
          :
          <> </>
        }
      </Box>
    </>
  );
}
