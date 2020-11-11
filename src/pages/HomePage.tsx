import React, { useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useAppState } from "../AppStateContext";
import LoginForm from "../components/login/LoginForm";
import users from "../mockdata/users.json";

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
      {state.userLoggedIn && <Redirect to="/admin/dashboard" />}
      <LoginForm handleLogin={handleClick} />
    </>
  );
}

export default HomePage;
