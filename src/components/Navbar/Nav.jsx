import React from "react";
import "./Nav.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Navigation() {
  return (
    <Navbar className="Navbar" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-link">
            <Nav.Link href="/App">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <NavDropdown
              title="Restaurants"
              id="basic-nav-dropdown"
              className="nav-dropdown"
            >
              <NavDropdown.Item href="/vegan">Vegan</NavDropdown.Item>
              <NavDropdown.Item href="/veganFriendly">
                Vegan-Friendly
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
