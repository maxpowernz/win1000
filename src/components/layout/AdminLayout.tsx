import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import SideNavBar from "./navigation/SideNavBar";
import TopAppBar from "./navigation/TopAppBar";
import { Route, Redirect, Switch } from "react-router-dom";
import { useAppState } from "../../AppStateContext";
import { SideBarListItem } from "./navigation/SideBarListItems";
import ChildMain from "../../pages/ChildMain";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    paddingTop: `calc(${theme.mixins.toolbar.minHeight}px + ${theme.spacing(8)}px)`,
  },
}));

const switchRoutes = (routes: SideBarListItem[]) => (
  <Switch>
    <Route path="/admin/childmain/:id" component={ChildMain}></Route>
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
