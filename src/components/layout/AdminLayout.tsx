import React, { useState } from "react";
import { Container, createStyles, makeStyles, useTheme } from "@material-ui/core";
import SideNavBar from "./navigation/SideNavBar";
import TopAppBar from "./navigation/TopAppBar";
import { Route, Redirect, Switch } from "react-router-dom";
import { useAppState } from "../../AppStateContext";
import ChildHome from "../../pages/child/ChildHome";
import clsx from "clsx";
import { SideBarListItem } from "../../shared/interfaces/sideBarListItem.interface";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    content: {
      flexGrow: 1,
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
  const [open, setOpen] = useState(true);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <TopAppBar handleDrawerOpen={handleDrawerOpen} open={open && !matches} />

      <SideNavBar handleDrawerOpen={handleDrawerOpen} open={open && !matches} />

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
