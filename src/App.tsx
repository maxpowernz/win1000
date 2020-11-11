import React from "react";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import theme from "./theme";
import AdminLayout from "./components/layout/AdminLayout";
import HomePage from "./pages/HomePage";
import Auth from "./components/Auth";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Auth>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/admin" component={AdminLayout} />
          </Switch>
        </Auth>
      </Router>
    </ThemeProvider>
  );
}

export default App;
