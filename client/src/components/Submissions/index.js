import React, {  useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Submissions = ({ submission }) => {
  //Submissions State

  const [submissionList] = useState(submission);

  submissionList.forEach((elm, i) => {
    elm.id = i + 1;
  });
  return (
    <>
      <Container>
        <Row>
          <Col>
            {" "}
            {submissionList.map((submission) => (
              <>
                <h6>Submission {submission.id}</h6>
                <ul>
                  <li>{submission.name}</li>
                  <li>{submission.surname}</li>
                  <li>{submission.age}</li>
                </ul>
              </>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Submissions;
