import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { useAppState } from "../../../AppStateContext";
import NavItem from "./NavItem";
import { List, Typography } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundColor: "#18202C",
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: theme.mixins.toolbar.minHeight,
    backgroundColor: "#232F3E",
    color: "white",
    paddingLeft: theme.spacing(2),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: "4rem",
  },
  closeIcon: {
    color: theme.palette.grey[50],
  },
  listItems: {
    paddingLeft: theme.spacing(1),
  },
}));

export default function SideNavBar() {
  const classes = useStyles();

  const { state, dispatch } = useAppState();

  const handleDrawerClose = () => {
    dispatch({ type: "OPEN_CLOSE_DRAWER", payload: false });
  };

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !state.isDrawerOpen && classes.drawerPaperClose),
      }}>
      <div className={classes.toolbarIcon}>
        <Typography variant="h4">WIN1000</Typography>
        <IconButton onClick={handleDrawerClose} className={classes.closeIcon}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <List className={classes.listItems}>
        {state.sideBarListItems.map((item) => {
          return <NavItem {...item} key={item.title} />;
        })}
      </List>
    </Drawer>
  );
}
