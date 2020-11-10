import React, { useEffect } from "react";
import { withStyles, Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import TableWrapper from "../table-parts/TableWrapper";
import { InsertDriveFile, PictureAsPdf } from "@material-ui/icons";
import { Education } from "../../shared/interfaces/education.interface";
import { TableFooter } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { User } from "../../shared/interfaces/user.interface";
import { useAppState } from "../../AppStateContext";
import { EducationDocument } from "../../shared/interfaces/documents.interface";
import { get } from "https";

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
  heading: string;
  user: User;
}

export default function DocumentsTable({ data, heading, user }: Props) {
  const classes = useStyles();

  const { state } = useAppState();

  // const makeRows = () => {
  //   const rows: any = [];

  //   data.forEach((d) =>
  //     d.documents.map((v) =>
  //       rows.push(
  //         <StyledTableRow>
  //           <StyledTableCell>{d.schoolName}</StyledTableCell>
  //           <StyledTableCell>{v.uploadedBy}</StyledTableCell>
  //           <StyledTableCell>
  //             <InsertDriveFile style={{ color: red[900] }} /> {v.documentName}
  //           </StyledTableCell>
  //         </StyledTableRow>
  //       )
  //     )
  //   );

  //   return rows;
  // };

  const getSchoolName = (id: number) => {
    const schoolName = state.selectedChild.education.find((s) => s.schoolId === id)?.schoolName;

    return schoolName;
  };

  const upload = () => {};

  return (
    <>
      <TableWrapper heading={heading} color="primary">
        <Table className={classes.table} aria-label="customized table" size="small">
          <TableHead>
            <TableRow style={{ height: 1 }}>
              <StyledTableCell width={"40%"}>School</StyledTableCell>
              <StyledTableCell width={"35%"}>Uploaded By</StyledTableCell>
              <StyledTableCell width={"25%"}>Document Name</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {state.selectedChild.educationDocuments.map((document: EducationDocument) => (
              <>
                <StyledTableRow>
                  <StyledTableCell>{getSchoolName(document.schoolId)}</StyledTableCell>
                  <StyledTableCell>{document.uploadedBy}</StyledTableCell>
                  <StyledTableCell>
                    <InsertDriveFile style={{ color: red[900] }} fontSize="small" />{" "}
                    {document.documentName}
                  </StyledTableCell>
                </StyledTableRow>
              </>
            ))}
          </TableBody>

          <TableFooter>
            <TableRow>
              <TableCell colSpan={3} align="right" size="medium">
                <div>
                  <form>
                    <input type="file" name="filename" />
                    <Button color="secondary" variant="contained" size="small" onClick={upload}>
                      Upload
                    </Button>
                  </form>
                </div>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableWrapper>
    </>
  );
}
