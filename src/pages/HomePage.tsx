import React from "react";
import { Link } from "react-router-dom";
// import LoginForm from "../loginComponents/LoginForm";
function HomePage() {
  return (
    <div style={{ display: "flex", padding: "2rem" }}>
    <Link to="/admin">
      <h2>Admin</h2>
    </Link>
  </div>
  //  <LoginForm/>
  );
}

export default HomePage;
