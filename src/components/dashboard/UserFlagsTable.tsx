import React from "react";
import { withStyles, Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableWrapper from "../table-parts/TableWrapper";

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      color: theme.palette.grey[500],
      paddingTop: 8,
      paddingBottom: 8,
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell);

const StyledTableRow = withStyles(() =>
  createStyles({
    root: {
      //   "&:nth-of-type(odd)": {
      //     backgroundColor: theme.palette.action.hover,
      //   },
    },
  })
)(TableRow);

function createData(from: string, subject: string, date: string) {
  return { from, subject, date };
}

const rows = [
  createData("Craig Ritani", "Subject line", new Date("2020,11,05").toDateString()),
  createData("Craig Ritani", "Subject line", new Date("2020,10,15").toDateString()),
  createData("Craig Ritani", "Subject line", new Date("2020,09,05").toDateString()),
];

const useStyles = makeStyles(() =>
  createStyles({
    table: {
      minWidth: 300,
    },
  })
);

export default function FlagsTable() {
  const classes = useStyles();

  return (
    <>
      <TableWrapper heading="flags" color="red">
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow style={{ height: 1 }}>
              <StyledTableCell>From</StyledTableCell>
              <StyledTableCell>Subject</StyledTableCell>
              <StyledTableCell>Date</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.date}>
                <StyledTableCell component="th" scope="row">
                  {row.from}
                </StyledTableCell>
                <StyledTableCell>{row.subject}</StyledTableCell>
                <StyledTableCell>{row.date}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableWrapper>
    </>
  );
}
