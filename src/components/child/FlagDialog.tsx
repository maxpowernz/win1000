import React from "react";
import { createStyles, makeStyles, Theme, withStyles, WithStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { Flag } from "../../shared/interfaces/flag.interface";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      minWidth: 300,
    },
    paper: {
      minWidth: 500,
    },
  })
);

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

interface Props {
  open: boolean;
  handleClose: any;
  flagData: Flag;
}

export default function FlagDialog(props: Props) {
  const { open, handleClose, flagData } = props;

  const classes = useStyles();

  const PrivateData = () => {
    return (
      <>
        <Typography variant="h6" color="error">
          This flag data is private please contact
        </Typography>
        <Typography>
          {flagData.contact} {flagData.contactNumber}
        </Typography>
        <Typography>email@host.com</Typography>
      </>
    );
  };

  const PublicData = () => (
    <>
      <Typography variant="h6">Description</Typography>
      <Typography gutterBottom>{flagData.flagDescription}</Typography>
      <Typography variant="h6">Outcome</Typography>
      <Typography gutterBottom style={{ whiteSpace: "break-spaces" }}>
        {flagData.outcome}
      </Typography>
    </>
  );

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        classes={{ paper: classes.paper }}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {flagData.agencyName}
        </DialogTitle>
        <DialogContent dividers>
          {flagData.privacyStatus === "Private" ? <PrivateData /> : <PublicData />}
        </DialogContent>
        <DialogActions style={{ height: "2rem" }}>
          {/* <Button autoFocus onClick={handleClose} color="primary">
            Save changes
          </Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}
