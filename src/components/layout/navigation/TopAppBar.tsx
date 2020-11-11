import React from "react";
import clsx from "clsx";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import { useAppState } from "../../../AppStateContext";
import ChildNavTabs from "./ChildNavTabs";
import { Email } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: {
      paddingRight: 24, // keep right padding when drawer closed
    },

    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),

      minHeight: theme.mixins.toolbar.minHeight,
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,

      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    menuButtonHidden: {
      display: "none",
    },
    title: {
      flexGrow: 1,
    },
  })
);

export default function TopAppBar() {
  const classes = useStyles();

  const { state, dispatch } = useAppState();
  const history = useHistory();

  const handleDrawerOpen = () => {
    dispatch({ type: "OPEN_CLOSE_DRAWER", payload: true });
  };

  return (
    <>
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, state.isDrawerOpen && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, state.isDrawerOpen && classes.menuButtonHidden)}>
            <MenuIcon />
          </IconButton>
          <Typography component="h5" variant="h5" color="inherit" noWrap className={classes.title}>
            {Object.keys(state.selectedChild).length > 0 && (
              <span>{state.selectedChild.firstName + " " + state.selectedChild.lastName}</span>
            )}
          </Typography>
          <Typography>
            Kia Ora {state.user?.firstName}, Role: {state.user?.role}
          </Typography>
          <IconButton color="inherit" onClick={() => history.push("/admin/user/messages")}>
            <Badge badgeContent={3} color="error">
              <Email />
            </Badge>
          </IconButton>
        </Toolbar>

        {state.showChildNavTabs && <ChildNavTabs id={state.selectedChild.childId} />}
      </AppBar>
    </>
  );
}
