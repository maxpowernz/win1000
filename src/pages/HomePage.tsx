import Button from "@material-ui/core/Button";
import React, { useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useAppState } from "../AppStateContext";
import useLocalStorage from "../hooks/uselocalStorage";
import users from "../mockdata/users.json";
import { User } from "../shared/interfaces/user.interface";

function HomePage() {
  const { state, dispatch } = useAppState();

  const history = useHistory();

  useEffect(() => {
    console.log("home");
  }, [history]);

  const handleClick = () => {
    const user: any = users.find((u) => u.userId === 1);

    dispatch({ type: "SET_USER", payload: user });
    dispatch({ type: "SET_LOGGED_IN_STATUS", payload: true });
    window.localStorage.setItem("user", JSON.stringify(user));
  };

  return (
    <>
      {console.log("home")}
      {state.userLoggedIn && <Redirect to="/admin" />}
      <div style={{ padding: 20 }}>
        <Button onClick={() => handleClick()} variant="contained" color="secondary">
          Log in
        </Button>
      </div>
    </>
  );
}

export default HomePage;
