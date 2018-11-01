import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./index.css";
// package
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "@fortawesome/fontawesome-free/css/all.css";

// components

import NavBar from "../src/Components/NavBar";
import HomePage from "../src/Pages/Homepage";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BrowserRouter>
    <div className="container-fluid">
      <NavBar />

      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </main>
    </div>
  </BrowserRouter>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
