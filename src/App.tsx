import React from "react";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import theme from "./theme";
import AdminLayout from "./components/layout/AdminLayout";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/admin" component={AdminLayout} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
