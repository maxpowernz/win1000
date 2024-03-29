import React from "react";
import { withStyles, Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import TableHeading from "../table-parts/TableHeading";
import moment from "moment";
import { formatDate } from "../../utils/dateUtils";

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
  createData("Craig Ritani", "Subject line", formatDate("2020/11/05")),
  createData("Craig Ritani", "Subject line", formatDate("2020/10/15")),
  createData("Craig Ritani", "Subject line", formatDate("2020/09/05")),
];

const useStyles = makeStyles(() =>
  createStyles({
    table: {
      minWidth: 300,
    },
  })
);

export default function InboxTable() {
  const classes = useStyles();

  return (
    <>
      <Box my={4}>
        <Paper>
          <TableHeading heading="Inbox" />
          <Box paddingX={4} paddingY={2}>
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
                  <StyledTableRow key={row.from + row.date}>
                    <StyledTableCell component="th" scope="row">
                      {row.from}
                    </StyledTableCell>
                    <StyledTableCell>{row.subject}</StyledTableCell>
                    <StyledTableCell>{row.date}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </Paper>
      </Box>
    </>
  );
}
