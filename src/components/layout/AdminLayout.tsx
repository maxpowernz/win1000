import React from "react";
import { Container, createStyles, makeStyles } from "@material-ui/core";
import SideNavBar from "./navigation/SideNavBar";
import TopAppBar from "./navigation/TopAppBar";
import { Route, Redirect, Switch } from "react-router-dom";
import { useAppState } from "../../AppStateContext";
import { SideBarListItem } from "./navigation/SideBarListItems";
import ChildHome from "../../pages/child/ChildHome";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    content: {
      flexGrow: 1,
      height: "100vh",
      paddingTop: `calc(${theme.mixins.toolbar.minHeight}px + ${theme.spacing(8)}px)`,
    },
  })
);

const switchRoutes = (routes: SideBarListItem[]) => {
  return routes.map((route) => (
    <Route path={route.layout + route.path} component={route.component} key={route.title}></Route>
  ));
};

export default function MainLayout(): JSX.Element {
  const classes = useStyles();
  const { state } = useAppState();

  return (
    <div className={classes.root}>
      <TopAppBar />

      <SideNavBar />

      <Container>
        <div className={classes.content}>
          <Switch>
            <Route path="/admin/child/:id" component={ChildHome}></Route>
            {switchRoutes(state.sideBarListItems)}
            {switchRoutes(state.userSideBarListItems)}

            {state.user.role === "admin" && switchRoutes(state.adminSideBarListItems)}

            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
        </div>
      </Container>
    </div>
  );
}
