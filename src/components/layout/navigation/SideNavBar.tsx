import React, { useState } from "react";
import clsx from "clsx";
import { createStyles, makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useAppState } from "../../../AppStateContext";
import NavItem from "./NavItem";
import { Button, Divider, List, ListItem, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    backgroundColor: "#18202C",
    flexShrink: 0,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClosed: {
    overflowX: "hidden",
    backgroundColor: "#18202C",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(8),
    },
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    color: theme.palette.grey[300],
    backgroundColor: "#232F3E",
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  listItems: {
    paddingLeft: theme.spacing(1),
  },
  divider: {
    backgroundColor: theme.palette.grey[600],
  },
  drawerHeaderClosed: {
    marginBottom: 50,
  },
  drawerHeaderClosedTabsOpen: {
    marginBottom: 20,
  },
}));

interface Props {
  handleDrawerOpen: () => void;
  open: boolean;
}

export default function SideNavBar(props: Props) {
  const classes = useStyles();
  const history = useHistory();
  const theme = useTheme();
  const { handleDrawerOpen, open } = props;

  const { state, dispatch } = useAppState();

  const handleLogOut = () => {
    window.localStorage.removeItem("user");
    dispatch({ type: "SET_SELECTED_CHILD", payload: {} as any });
    dispatch({ type: "SET_LOGGED_IN_STATUS", payload: false });

    history.push("/");
  };

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClosed]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClosed]: !open,
        }),
      }}>
      <div
        className={clsx(
          classes.drawerHeader,
          !open && state.showChildNavTabs && classes.drawerHeaderClosed
        )}>
        <Typography variant="h4">WIN1000</Typography>
        <IconButton onClick={handleDrawerOpen}>
          <ChevronLeftIcon style={{ color: theme.palette.grey[300] }} />
        </IconButton>
      </div>

      <List className={classes.listItems}>
        {state.sideBarListItems.map((item) => {
          return <NavItem {...item} key={item.title} />;
        })}
      </List>
      <Divider className={classes.divider} variant="middle"></Divider>
      <List className={classes.listItems}>
        {state.userSideBarListItems.map((item) => {
          return <NavItem {...item} key={item.title} />;
        })}
      </List>

      {state.user.role === "admin" && (
        <>
          <Divider className={classes.divider} variant="middle"></Divider>

          <List className={classes.listItems}>
            {state.adminSideBarListItems.map((item) => {
              return <NavItem {...item} key={item.title} />;
            })}
          </List>
        </>
      )}

      <List>
        <ListItem>
          <Button onClick={handleLogOut} variant="contained" color="secondary">
            Log Out
          </Button>
        </ListItem>
      </List>
    </Drawer>
  );
}
