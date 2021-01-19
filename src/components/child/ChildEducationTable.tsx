import React from "react";
import { withStyles, Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableWrapper from "../table-parts/TableWrapper";
import { Education } from "../../shared/interfaces/education.interface";
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

const StyledTableRow = withStyles((theme) =>
  createStyles({
    root: {
      // "&:nth-of-type(odd)": {
      //   backgroundColor: theme.palette.action.hover,
      // },
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
            <StyledTableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Level</StyledTableCell>
              <StyledTableCell>Date</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {data.map((d: Education) => (
              <StyledTableRow key={d.schoolId}>
                <StyledTableCell component="th" scope="row">
                  {d.schoolName}
                </StyledTableCell>
                <StyledTableCell>{d.schoolType}</StyledTableCell>
                <StyledTableCell>
                  {formatDate(d.dateStart)} - {d.dateFinish ? formatDate("DD/MM/YYYY") : "Present"}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableWrapper>
    </>
  );
}
