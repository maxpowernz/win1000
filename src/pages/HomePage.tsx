import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div style={{ display: "flex", padding: "2rem" }}>
      <Link to="/admin">
        <h2>Log in</h2>
      </Link>
    </div>
  );
}

export default HomePage;
