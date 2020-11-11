import React, { useEffect } from "react";
import { withStyles, Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableWrapper from "../table-parts/TableWrapper";
import { Flag } from "../../shared/interfaces/flag.interface";
import moment from "moment";
import { Delete } from "@material-ui/icons";
import { Edit } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContentText,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import db from "../../firebase";
import firebase from "firebase";
import { useAppState } from "../../AppStateContext";

const flagRepo = "FlagMaster";
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
    textarea: {
      resize: "both",
    },
  })
);

interface State {
  agencyName: string;
  contact: string;
  flagDescription: string;
  flagRecords: Flag[];
  outcome: string;
  openAddForm: boolean;
  openDeleteConfirmation: boolean;
  dateFlagOpened: Date;
  editFlag?: Flag;
  deleteFlagRecord?: Flag;
}

interface FlagProps {
  flags: Flag[];
}

export default function ChildFlagsTable(props: FlagProps) {
  const classes = useStyles();
  const { state } = useAppState();

  const [values, setValues] = React.useState<State>({
    flagRecords: [],
    agencyName: "",
    contact: "",
    flagDescription: "",
    outcome: "",
    openAddForm: false,
    openDeleteConfirmation: false,
    dateFlagOpened: new Date("2014-08-18T21:11:54"),
    editFlag: undefined,
    deleteFlagRecord: {} as Flag,
  });

  const editRecord = (flagRecord: Flag) => {
    setValues({
      ...values,
      openAddForm: true,
      editFlag: flagRecord,
      flagDescription: flagRecord.flagDescription,
      outcome: flagRecord.outcome,
    });
  };
  // Add form functions
  const handleClickOpen = () => {
    setValues({ ...values, openAddForm: true });
  };

  const handleClose = () => {
    setValues({ ...values, openAddForm: false });
  };

  const handleCloseWithSubmit = () => {
    const tempFlagObj = values.editFlag ? values.editFlag : undefined;
    setValues({ ...values, openAddForm: false, editFlag: {} as Flag });
    tempFlagObj
      ? db
          .collection(flagRepo)
          .doc(tempFlagObj.flagId)
          .update({
            flagDescription: values.flagDescription,
            outcome: values.outcome,
            dateFlagOpened: firebase.firestore.FieldValue.serverTimestamp(),
            flagStatus: "close",
            childId: state.selectedChild.childId,
            agencyId: state.user.organisationId ? state.user.organisationId : "missing",
            schoolId: state.user.schoolId ? state.user.schoolId : "missing",
            agencyName: state.user.organisationName,
            contact: state.user.firstName + " " + state.user.lastName,
            privacyStatus: "missing",
            contactNumber: "missing",
          })
      : db.collection(flagRepo).add({
          flagDescription: values.flagDescription,
          outcome: values.outcome,
          dateFlagOpened: firebase.firestore.FieldValue.serverTimestamp(),
          flagStatus: "close",
          childId: state.selectedChild.childId,
          agencyId: state.user.organisationId ? state.user.organisationId : "missing",
          schoolId: state.user.schoolId ? state.user.schoolId : "missing",
          agencyName: state.user.organisationName,
          contact: state.user.firstName + " " + state.user.lastName,
          privacyStatus: "missing",
          contactNumber: "missing",
        });
  };

  // Delete dailog functions
  const handleClickOpenConfirmation = (flagRecord?: Flag) => {
    setValues({ ...values, openDeleteConfirmation: true, deleteFlagRecord: flagRecord });
  };

  const handleCloseConfirmation = () => {
    setValues({ ...values, openDeleteConfirmation: false });
  };

  const handleCloseWithDelete = () => {
    setValues({ ...values, openDeleteConfirmation: false });

    db.collection(flagRepo)
      .doc(values.deleteFlagRecord?.flagId)
      .delete()
      .then(() => {});
  };

  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  useEffect(() => {
    console.log("useEffect Hook!!!");

    db.collection(flagRepo).onSnapshot((snapshot) => {
      console.log("Firebase Snap!");
      setValues({
        ...values,
        flagRecords: snapshot.docs.map((doc) => {
          const flagObj: Flag = {
            childId: doc.data().childId,
            flagId: doc.id,
            dateflagOpened: doc.data().dateflagOpened,
            agencyName: doc.data().agencyName,
            contact: doc.data().contact,
            flagDescription: doc.data().flagDescription,
            outcome: doc.data().outcome,
            flagStatus: doc.data().flagStatus,
            agencyId: doc.data().agencyId,
            schoolId: doc.data().schoolId,
            privacyStatus: doc.data().privacyStatus,
            contactNumber: doc.data().contactNumber,
          };
          return flagObj;
        }),
      });
    });
  }, []);

  return (
    <>
      <TableWrapper heading="Flags" color="primary" onAdd={handleClickOpen}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow style={{ height: 1 }}>
              <StyledTableCell>Agency</StyledTableCell>
              <StyledTableCell>Contact</StyledTableCell>
              <StyledTableCell>Date</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
              <StyledTableCell>Description</StyledTableCell>
              {/* <StyledTableCell>Outcome</StyledTableCell> */}
              <StyledTableCell>Delete</StyledTableCell>
              <StyledTableCell>Edit</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {values.flagRecords.map((flag: Flag) => (
              <StyledTableRow key={flag.flagId}>
                <StyledTableCell component="th" scope="row">
                  {flag.agencyName}
                </StyledTableCell>
                <StyledTableCell>{flag.contact}</StyledTableCell>
                <StyledTableCell>
                  {moment(flag.dateflagOpened).format("DD/MM/YYYY")}
                </StyledTableCell>
                <StyledTableCell>{flag.flagStatus}</StyledTableCell>
                <StyledTableCell>{flag.flagDescription}</StyledTableCell>
                {/* <StyledTableCell>{flag.outcome}</StyledTableCell> */}
                <StyledTableCell>
                  <IconButton color="secondary" onClick={() => handleClickOpenConfirmation(flag)}>
                    <Delete />
                  </IconButton>
                </StyledTableCell>
                <StyledTableCell>
                  <IconButton color="secondary" onClick={() => editRecord(flag)}>
                    <Edit />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableWrapper>

      {/* Add Flag Dialog */}
      <Dialog open={values.openAddForm} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Flag</DialogTitle>
        <DialogContent>
          {/* "dateFlagOpened": "2012,05,02",
          "agencyName": "Work and Income",
          "contact": "Mrs Person Name",
          "flag": "Getting required entitlements",
          "outcome": "Offer of funding for home help with bathing and personal care. The family chose not to accept the home care because they felt there were so many organisations involved in their lives already, and this was one aspect of care they wanted to manage themselves. Instead, funding was found for a gym membership and swimming to strengthen the mother’s back so she could manage this aspect of her child’s care. Other funding was accessed to modify equipment to help the mother lift her child. Housing New Zealand found a more accessible house which needed far less modification to suit the family. Connections were made to link mother and child with support groups and other families. Thanks to the involvement of Barnardos’ Kid Start, special lifting equipment and extra training for caregivers enabled the daughter to participate in early childhood education. Budgeting advice was gained, and arrangements were made for the older children to attend camps, recognising that because of budget and transport constraint they had missed out on these kinds of experiences",
          "flagStatus": "Closed" */}
          <form noValidate autoComplete="off">
            {/* <TextField
            id="date"
            label="Matter Open Date"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            onChange={handleChange('dateFlagOpened')}
          /> */}
            {/* <TextField
            autoFocus
            margin="dense"
            id="agencyName"
            label="Agency"
            type="form"
            fullWidth
            onChange={handleChange('agencyName')}
          />
          <TextField
            autoFocus
            margin="dense"
            id="contactName"
            label="Contact Name"
            type="form"
            fullWidth
            onChange={handleChange('contact')}
          /> */}
            <TextField
              autoFocus
              margin="dense"
              id="flag"
              label="Flag Description"
              type="form"
              value={values.flagDescription ? values.flagDescription : ""}
              fullWidth
              onChange={handleChange("flagDescription")}
            />

            <TextField
              autoFocus
              margin="dense"
              id="outcome"
              label="Outcome"
              type="form"
              value={values.outcome ? values.outcome : ""}
              fullWidth
              multiline
              variant="outlined"
              onChange={handleChange("outcome")}
              inputProps={{ className: classes.textarea }}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCloseWithSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      {/* Delete record confirmation  */}

      <Dialog
        open={values.openDeleteConfirmation}
        onClose={handleCloseConfirmation}
        aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Delete Record</DialogTitle>
        <DialogContent>
          <DialogContentText>Are you sure you want to delete this record?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseConfirmation} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCloseWithDelete} color="primary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
