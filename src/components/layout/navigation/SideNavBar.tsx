import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { useAppState } from "../../../AppStateContext";
import NavItem from "./NavItem";
import { Button, Divider, Link, List, ListItem, Typography } from "@material-ui/core";
import useLocalStorage from "../../../hooks/uselocalStorage";
import { useHistory } from "react-router-dom";
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
    paddingLeft: theme.spacing(3),
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
    paddingLeft: theme.spacing(2),
  },
  listItemsTitle: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(1),
  },
  divider: {
    backgroundColor: theme.palette.grey[600],
  },
}));

export default function SideNavBar() {
  const classes = useStyles();
  const history = useHistory();

  const { state, dispatch } = useAppState();

  const handleDrawerClose = () => {
    dispatch({ type: "OPEN_CLOSE_DRAWER", payload: false });
  };

  const handleLogOut = () => {
    window.localStorage.removeItem("user");
    dispatch({ type: "SET_LOGGED_IN_STATUS", payload: false });

    history.push("/");
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
      <Typography variant="h5" color="primary" className = {classes.listItemsTitle}>
       About me
      </Typography>
      <List className={classes.listItems}>
        {state.sideBarListItems.map((item) => {
          return (<>
          <NavItem {...item} key={item.title} />
          <Divider variant="middle" classes={{root: classes.divider}}/>
          </>);
        })}
      </List>

      <Typography variant="h5" color="primary" className = {classes.listItemsTitle}>
        Admin
      </Typography>
      <List className={classes.listItems}>
        {state.adminSideBarListItems.map((item) => {
          return (<>
          <NavItem {...item} key={item.title} />
          <Divider variant="middle" classes={{root: classes.divider}}/>
          </>);
        })}
      </List>

      <Divider className={classes.divider} variant="middle"></Divider>
      <List className={classes.listItems}>
        {state.userSideBarListItems.map((item) => {
          return <NavItem {...item} key={item.title} />;
        })}
      </List>
      <Divider className={classes.divider} variant="middle"></Divider>

      <List className={classes.listItems}>
        {state.adminSideBarListItems.map((item) => {
          return <NavItem {...item} key={item.title} />;
        })}
      </List>

      <List>
        <ListItem disableGutters>
          <Button onClick={handleLogOut}>Log Out</Button>
        </ListItem>
      </List>
    </Drawer>
  );
}
