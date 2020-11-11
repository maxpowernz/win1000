import React from "react";
import { withStyles, Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableWrapper from "../table-parts/TableWrapper";
import { Flag } from "../../shared/interfaces/flag.interface";

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

// function createData(from: string, subject: string, date: string) {
//   return { from, subject, date };
// }

const useStyles = makeStyles(() =>
  createStyles({
    table: {
      minWidth: 300,
    },
  })
);

interface FlagProps {
  flags: Flag[];
}

export default function ChildAgenciesTable({ flags }: FlagProps) {
  const classes = useStyles();

  return (
    <>
      <TableWrapper heading="Involved Agencies" color="primary">
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow style={{ height: 1 }}>
              <StyledTableCell>Agency</StyledTableCell>
              <StyledTableCell align="right">Flags</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {flags.map((flag: Flag) => (
              <StyledTableRow key={flag.flagId}>
                <StyledTableCell component="th" scope="row">
                  {flag.agencyName}
                </StyledTableCell>
                <StyledTableCell align="right">{Math.floor(Math.random() * 20)}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableWrapper>
    </>
  );
}
