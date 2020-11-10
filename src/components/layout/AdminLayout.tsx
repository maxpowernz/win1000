import React, { useEffect } from "react";
import { Container, makeStyles } from "@material-ui/core";
import SideNavBar from "./navigation/SideNavBar";
import TopAppBar from "./navigation/TopAppBar";
import { Route, Redirect, Switch } from "react-router-dom";
import { useAppState } from "../../AppStateContext";
import { SideBarListItem } from "./navigation/SideBarListItems";
import useWindowDimensions from "../../utils/hooks/useWindowDimensions";
import ChildHome from "../../pages/child/ChildHome";
import useLocalStorage from "../../hooks/uselocalStorage";
import { User } from "../../shared/interfaces/user.interface";
import Auth from "../Auth";

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

const switchRoutes = (routes: SideBarListItem[]) => {
  return routes.map((route) => (
    <Route path={route.layout + route.path} component={route.component} key={route.title}></Route>
  ));
};

export default function MainLayout(): JSX.Element {
  const classes = useStyles();
  // const { width } = useWindowDimensions();
  const { state, dispatch } = useAppState();

  return (
    <div className={classes.root}>
      <TopAppBar />

      {/* {width > 600 ? <></> : <SideNavBar />} */}
      <SideNavBar />

      <Container>
        <div className={classes.content}>
          <Switch>
            <Route path="/admin/child/:id" component={ChildHome}></Route>
            {switchRoutes(state.sideBarListItems)}
            {switchRoutes(state.userSideBarListItems)}

            {switchRoutes(state.adminSideBarListItems)}

            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
        </div>
      </Container>
    </div>
  );
}
