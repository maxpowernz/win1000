import React, { useState } from "react";
import { withStyles, Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableWrapper from "../table-parts/TableWrapper";
import { Flag } from "../../shared/interfaces/flag.interface";
import moment from "moment";
import { Pageview, Visibility, VisibilityOff } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import FlagDialog from "./FlagDialog";
import { useAppState } from "../../AppStateContext";
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

export default function ChildFlagsTable({ flags }: FlagProps) {
  const classes = useStyles();
  const { state } = useAppState();

  const [open, setOpen] = useState(false);
  const [flagData, setFlagData] = useState<Flag>();

  const handleClickOpen = (id: number) => {
    const data = state.selectedChild.flags.find((f) => f.flagId === id);

    if (data) {
      setFlagData(data);
      setOpen(true);
    }
  };

  const handleClose = (value: string) => {
    setOpen(false);
  };

  return (
    <>
      <TableWrapper heading="Flags" color="primary">
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow style={{ height: 1 }}>
              <StyledTableCell>Agency</StyledTableCell>
              <StyledTableCell>Contact</StyledTableCell>
              <StyledTableCell>Date</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
              <StyledTableCell>Visibility</StyledTableCell>
              <StyledTableCell>View</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {flags.map((flag: Flag) => (
              <StyledTableRow key={flag.flagId}>
                <StyledTableCell component="th" scope="row">
                  {flag.agencyName}
                </StyledTableCell>
                <StyledTableCell>{flag.contact}</StyledTableCell>
                <StyledTableCell>{formatDate(flag.dateFlagOpened)}</StyledTableCell>
                <StyledTableCell>{flag.flagStatus}</StyledTableCell>
                <StyledTableCell>
                  {flag.privacyStatus === "Private" ? <VisibilityOff /> : <Visibility />}
                </StyledTableCell>
                <StyledTableCell>
                  <IconButton
                    onClick={(flagId) => handleClickOpen(flag.flagId)}
                    size="small"
                    key={flag.flagId}>
                    <Pageview color="secondary" />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableWrapper>
      <FlagDialog
        open={open}
        handleClose={handleClose}
        flagData={typeof flagData !== "undefined" ? flagData : ({} as Flag)}
      />
    </>
  );
}
