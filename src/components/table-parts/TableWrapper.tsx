import React from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import TableHeading from "../table-parts/TableHeading";

export default function TableWrapper(props: any) {
  return (
    <>
      <Box my={4}>
        <Paper>
          <TableHeading heading={props.heading} color={props.color} />
          <Box paddingX={4} paddingY={2}>
            {props.children}
          </Box>
        </Paper>
      </Box>
    </>
  );
}
