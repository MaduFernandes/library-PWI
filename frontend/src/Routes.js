import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home/Home";
import BookForms from "./pages/Forms/BookForms";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/book" component={BookForms} />
      </Switch>
    </BrowserRouter>
  );
}
