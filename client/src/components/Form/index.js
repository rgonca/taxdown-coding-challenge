import React, { useState } from "react";

import input from "../../input.json";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const TaxDownForm = ({ addSubmission }) => {
  // const { addSubmission } = useContext(SubmissionContext);
  //input.json State

  const [formShow, setInputShow] = useState(input.inputFields.slice(0, 3));

  //content state

  const [content, setContent] = useState({ name: "", surname: "", age: "" });

  //Add a new input field when the upper one is filled //Aborted since present problems and is not part of the coding challenge

//   let numberOfInputs = 1;
//   const addNewInput = () => {
//     numberOfInputs = numberOfInputs + 1;
//     setInputShow(input.inputFields.slice(0, numberOfInputs));
//   };

  // Acknowledges the changes in the input

  const handleInputChange = (e, name) => {
    setContent({ ...content, [name]: e.target.value });
  };

  //submits the form

  const handleFormSubmit = (e) => {
    e.preventDefault();
    //   console.log("contenido", content);
    addSubmission(content);
    setContent({ name: "", surname: "", age: "" });
  };

  return (
    <>
      <Form onSubmit={handleFormSubmit}>
        {formShow.map((input) => (
          <Form.Group key={input.id}>
            <Form.Label>{input.label}</Form.Label>
            <Form.Control
              onChange={(e) => {
                handleInputChange(e, input.id);
                // addNewInput();
              }}
              id={input.id}
              placeholder={input.placeholder}
              type={input.type}
              maxLength={input.maxLength}
              value={content[input.id]}
            />
          </Form.Group>
        ))}
        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default TaxDownForm;
