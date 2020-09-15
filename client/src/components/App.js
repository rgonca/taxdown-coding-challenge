import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import input from "../input.json";


import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './App.css'
class App extends Component {
  constructor() {
    super();
    this.state = {
      inputShow: input.inputFields.slice(0, 1),
      input,
      content: { name: "", surname: "", age: "" },
    };
    this.numberOfInputs = 1;
  }

  addNewInput = () => {
    this.numberOfInputs++;
    this.setState({
      inputShow: input.inputFields.slice(0, this.numberOfInputs),
    });
  };

  handleInputChange = (e, id) => {
    this.setState({ content: { ...this.state.content, [id]: e.target.value } })
  };


  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.content);
  };
  render() {
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
                      onChange={(e) => {
                        this.handleInputChange(e, input.id);
                        this.addNewInput();
                      }}
                      id={input.id}
                      placeholder={input.placeholder}
                      type={input.type}
                      maxLength={input.maxLength}
                      value={this.state.content[input.id]}
                    />
                  </Form.Group>
                ))}
                <Button variant="success" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
