import React from "react";
import { withStyles, Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableWrapper from "../table-parts/TableWrapper";
import { Issue } from "../../shared/interfaces/issue.interface";
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

interface IssueProps {
  issues: Issue[];
}

export default function ChildIssuesTable({ issues }: IssueProps) {
  const classes = useStyles();

  return (
    <>
      <TableWrapper heading="Issues" color="primary">
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
            {issues.map((issue: Issue) => (
              <StyledTableRow key={issue.issueId}>
                <StyledTableCell component="th" scope="row">
                  {issue.agencyName}
                </StyledTableCell>
                <StyledTableCell>{issue.contact}</StyledTableCell>
                <StyledTableCell>
                  {moment(issue.dateIssueOpened).format("DD/MM/YYYY")}
                </StyledTableCell>
                <StyledTableCell>{issue.issueStatus}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableWrapper>
    </>
  );
}
