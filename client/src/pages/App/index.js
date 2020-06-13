import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactUs from "../ContactUs";
import Admin from "../Admin";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/">
          <ContactUs />
        </Route>
      </Switch>
    </Router>
  );
}
