import React from "react";
import { withStyles, Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableWrapper from "../table-parts/TableWrapper";
import { flag } from "../../shared/interfaces/flag.interface";
import moment from "moment";

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

interface Props {
  data: any;
  tableHeaderData: any;
}

export default function ChildflagsTable({ data, tableHeaderData }: Props) {
  const classes = useStyles();

  return (
    <>
      <TableWrapper heading="flags" color="red">
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow style={{ height: 1 }}>
              <StyledTableCell>Agency</StyledTableCell>
              <StyledTableCell>Contact</StyledTableCell>
              <StyledTableCell>Date Opened</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((flag: any) => (
              <StyledTableRow key={flag.flagId}>
                <StyledTableCell component="th" scope="row">
                  {flag.agencyName}
                </StyledTableCell>
                <StyledTableCell>{flag.contact}</StyledTableCell>
                <StyledTableCell>
                  {moment(flag.dateflagOpened).format("DD/MM/YYYY")}
                </StyledTableCell>
                <StyledTableCell>{flag.flagStatus}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableWrapper>
    </>
  );
}
