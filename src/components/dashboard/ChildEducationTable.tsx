import React from "react";
import { withStyles, Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableWrapper from "../table-parts/TableWrapper";
import { Health } from "../../shared/interfaces/health.interface";
import { Education } from "../../shared/interfaces/education.interface";
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
  data: Education[];
}

export default function ChildEducationTable({ data }: Props) {
  const classes = useStyles();

  return (
    <>
      <TableWrapper heading="Education" color="primary">
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow style={{ height: 1 }}>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Level</StyledTableCell>
              <StyledTableCell>Date Start</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((d: Education) => (
              <StyledTableRow key={d.schoolId}>
                <StyledTableCell component="th" scope="row">
                  {d.schoolName}
                </StyledTableCell>
                <StyledTableCell>{d.schoolType}</StyledTableCell>
                <StyledTableCell>{moment(d.dateStart).format("DD/MM/YYYY")}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableWrapper>
    </>
  );
}
