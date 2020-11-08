import React from "react";
import { withStyles, Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableWrapper from "../table-parts/TableWrapper";
import { Health } from "../../shared/interfaces/health.interface";

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
  data: Health[];
}

export default function ChildHealthTable({ data }: Props) {
  const classes = useStyles();

  return (
    <>
      <TableWrapper heading="Health" color="primary">
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow style={{ height: 1 }}>
              <StyledTableCell>Field 1</StyledTableCell>
              <StyledTableCell>Field 2</StyledTableCell>
              <StyledTableCell>Field 3</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((d: Health) => (
              <StyledTableRow key={d.field1}>
                <StyledTableCell component="th" scope="row">
                  {d.field1}
                </StyledTableCell>
                <StyledTableCell>{d.field2}</StyledTableCell>
                <StyledTableCell>{d.field3}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableWrapper>
    </>
  );
}
