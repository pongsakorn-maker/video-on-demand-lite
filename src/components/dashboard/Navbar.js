import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
export default function NavbarComponents() {
  return (
    <Navbar bg="light" expand="ex-lg">
      <Navbar.Brand as={Link} to="/">
        <FontAwesomeIcon icon={faCoffee} />
        {" Video On Demand"}
      </Navbar.Brand>
      <Nav>
        <Nav.Link as={Link} to="/user">
          Profile
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
