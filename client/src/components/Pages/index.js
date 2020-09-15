import React from "react";

import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const IndexPage = () => {
  //index Page with links to ssubmissions and form components
  return (
    <>
      <Container as="main">
        <Row>
          <Col>
            <h1>Hello There TaxDown!</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Link to="/form">
              <Button variant="success">Form</Button>
            </Link>
            <Link to="/submissions">
              <Button variant="light">Submissions</Button>
            </Link>
          </Col>
        </Row>
      </Container>
      <Container as="footer">
        <Row>
          <Col>
            <p>
              Our new Constitution is now established, and has an appearance
              that promises permanency; but in this world nothing can be said to
              be certain, except death and taxes.
            </p>
            <p>
              — Benjamin Franklin, in a letter to Jean-Baptiste Le Roy, 1789
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default IndexPage;
