import React from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
import SideNavBar from "./navigation/SideNavBar";
import TopAppBar from "./navigation/TopAppBar";
import { Route, Redirect, Switch } from "react-router-dom";
import { useAppState } from "../../AppStateContext";
import { SideBarListItem } from "./navigation/SideBarListItems";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
    paddingTop: `calc(${theme.mixins.toolbar.minHeight}px + ${theme.spacing(4)}px)`,
    border: "2px solid gray",
  },
}));

const switchRoutes = (routes: SideBarListItem[]) => (
  <Switch>
    {routes.map((route) => {
      return (
        <Route path={route.layout + route.path} component={route.component} key={route.title} />
      );
    })}
    <Redirect from="/admin" to="/admin/dashboard" />
  </Switch>
);

export default function MainLayout(): JSX.Element {
  const classes = useStyles();
  const { state } = useAppState();

  return (
    <div className={classes.root}>
      <TopAppBar />
      <SideNavBar />

      <Container>
        <div className={classes.content}>{switchRoutes(state.sideBarListItems)}</div>
      </Container>
    </div>
  );
}
