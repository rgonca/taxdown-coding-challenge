import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import input from "../input.json";

import InputForm from "./inputs";

import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
class App extends Component {
  constructor() {
    super();
    this.state = {
      inputShow: input.inputFields.slice(0, 1),
      input,
      content: '',
    };
    this.numberOfInputs = 1;
  }

  addNewInput = () => {
    this.numberOfInputs++;
    this.setState({
      inputShow: input.inputFields.slice(0, this.numberOfInputs),
    });
  };

  handleInputChange = (e) => {
    console.log('traza target', e.target);
    this.setState({ content: e.target.content });
    console.log('traza state',this.state.content);
    // const { name, value } = e.target;
    // this.setState({ [name]: value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    console.log("traza", { content: e.target.content });
  };
  render() {
    console.log("traza", this.state.content);
    return (
      <>
        <Container as="main">
          <Row>
            <Col>
              <Form onSubmit={this.handleFormSubmit}>
                {this.state.inputShow.map((input) => (
                  <Form.Group key={input.id}>
                    <Form.Label>{input.label}</Form.Label>
                    <Form.Control
                      // onChange={this.handleInputChange}
                      onChange={(e) => {
                        this.handleInputChange(e);
                        this.addNewInput();
                      }}
                      id={input.id}
                      placeholder={input.placeholder}
                      type={input.type}
                      maxLength={input.maxLength}
                      value={this.state.content}
                    />
                  </Form.Group>
                  // <InputForm
                  //   key={input.id}
                  //   {...this.state.value}
                  //   {...input}
                  //   handleInputChange={this.handleInputChange}
                  //   addNewInput={this.addNewInput}
                  // />
                ))}
                <Button type="submit">Submit</Button>{" "}
              </Form>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
