import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

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
}

export default function TableHeading(props: TableHeadingProps) {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.TableHeading} paddingX={4} paddingY={1.5}>
        <Typography variant="inherit" style={{ color: props.color }}>
          {props.heading}
        </Typography>
      </Box>
    </>
  );
}
