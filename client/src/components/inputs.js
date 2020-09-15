import React, { Component } from "react";

import Form from "react-bootstrap/Form";

class Inputform extends Component {
  constructor(props) {
    super(props);
    const {
      id, label, placeholder, type, maxLength, value
    } = this.props;
    this.state = {
      id,
      label,
      placeholder,
      type,
      maxLength,
      value,
    };
  }

  render() {
    console.log('traza', this.state.content);
    return (
      <>
        <Form.Group>
          <Form.Label>{this.state.label}</Form.Label>
          <Form.Control
            onChange={(e) => { this.props.handleInputChange(e); this.props.addNewInput();}}
            id={this.state.id}
            placeholder={this.state.placeholder}
            type={this.state.type}
            maxLength={this.state.maxLength}
            value={this.state.value}
          />
        </Form.Group>
      </>
    );
  }
}

export default Inputform;
