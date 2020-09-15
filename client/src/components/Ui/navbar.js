import React from "react";

import { link, NavLink } from "react-router";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
const Navigation = () => {
  //navbar with links to mainpage, submissions and form components
  return (
    <>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/submissions">Submissions</Nav.Link>
          <Nav.Link href="/form">Form</Nav.Link>
        </Nav>

      </Navbar>
    </>
  );
};
export default Navigation;
