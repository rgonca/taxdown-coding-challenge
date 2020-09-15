import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
// import input from "../input.json";
import TaxDownForm from "./Form";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";

const App = () => {

  //submissions array 
  const [submissions, storeSubmissions] = useState([]);

  //function that takes current submissions and adds a new one
  const addSubmission = submission => {
    storeSubmissions([...submissions, submission]);
  }

  return (
    <>
      <Container as="main">

        <Row>
          <Col>
            <TaxDownForm addSubmission={addSubmission}/>
          </Col>
        </Row>
      </Container>
    </>
  );
};


export default App;
