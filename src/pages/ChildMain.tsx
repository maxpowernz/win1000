import React, { useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useAppState } from "../AppStateContext";
import { Route, Switch, useHistory, useParams } from "react-router-dom";
import { findChildById } from "../utils/childrenUtils";
import childList from "../mockdata/mockchildren.json";
import { Child } from "../shared/interfaces/child.interface";
import PersonalInfo from "./child/PersonalInfo";
import Family from "./child/Family";
import Health from "./child/Health";
import Education from "./child/Education";
import Agencies from "./child/Agencies";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(4),
    },
  })
);

interface QueryParams {
  id: string;
}

export default function ChildMain() {
  const classes = useStyles();
  const history = useHistory();
  const { dispatch } = useAppState();
  const { id } = useParams<QueryParams>();

  const children: any = childList.children;

  useEffect(() => {
    console.log("use effect");

    const child: Child = findChildById(Number.parseInt(id), children);

    console.log(child);

    // if (Object.keys(child).length === 0) {
    //   history.push("/admin/dashboard");
    // }

    dispatch({ type: "SET_SELECTED_CHILD", payload: child });
  }, []);

  //page load it will show tabs, page leave it will hide tabs
  useEffect(() => {
    dispatch({ type: "SHOW_CHILD_NAVTABS", payload: true });

    return () => dispatch({ type: "SHOW_CHILD_NAVTABS", payload: false });
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <Switch>
        <Route exact path="/admin/childmain/:id" component={PersonalInfo}></Route>
        <Route path="/admin/childmain/family/:id" component={Family}></Route>
        <Route path="/admin/childmain/health/:id" component={Health}></Route>
        <Route path="/admin/childmain/education/:id" component={Education}></Route>
        <Route path="/admin/childmain/agencies/:id" component={Agencies}></Route>
      </Switch>
    </div>
  );
}
