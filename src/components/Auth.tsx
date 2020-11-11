import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAppState } from "../AppStateContext";
import { User } from "../shared/interfaces/user.interface";

function Auth(props: React.PropsWithChildren<{}>) {
  const { state, dispatch } = useAppState();
  const history = useHistory();

  const user = window.localStorage.getItem("user");

  useEffect(() => {
    console.log("auth useffect 1");

    if (user) {
      dispatch({ type: "SET_USER", payload: JSON.parse(user) as User });
    }
  }, [dispatch, user]);

  useEffect(() => {
    console.log("auth useffect 2");

    if (state.userLoggedIn) {
      history.push("/admin/dashboard");
    }
  }, [history, state.userLoggedIn]);

  return <>{props.children}</>;
}

export default Auth;
