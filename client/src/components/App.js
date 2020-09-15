import React, { useState, useEffect } from "react";

import { Switch, Route } from "react-router";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import TaxDownForm from "./Form";
import IndexPage from './Pages'
import Submissions from './Submissions'
import Navigation from './Ui/navbar'
import "./App.css";

const App = () => {

  //Submissions in local Storage

  let initialSubmissions = JSON.parse(localStorage.getItem("submissions"));
  if (!initialSubmissions) {
    initialSubmissions = [];
  }

  //submissions array

  const [submissions, storeSubmissions] = useState(initialSubmissions);

  //Use Effect to iterate when the state changes

  useEffect(() => {
    let initialSubmissions = JSON.parse(localStorage.getItem("submissions"));

    if (initialSubmissions) {
      localStorage.setItem("submissions", JSON.stringify(submissions));
    } else {
      localStorage.setItem("submissions", JSON.stringify([]));
    }
  }, [submissions]);

  //function that takes current submissions and adds a new one
  
  const addSubmission = (submission) => {
    storeSubmissions([...submissions, submission]);
  };
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/" render={() => <IndexPage />} />
        <Route
          path="/form"
          render={() => <TaxDownForm addSubmission={addSubmission} />}
        />
        <Route
          path="/submissions"
          render={() => <Submissions submission={initialSubmissions} />}
        />
      </Switch>
    </>
  );
};

export default App;
