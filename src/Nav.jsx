import React from "react";
import "./Nav.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Navigation() {
  return (
    <Navbar className="Nav" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-link">
            <Nav.Link href="./pages/Home">Home</Nav.Link>
            <Nav.Link href="./pages/About">About</Nav.Link>
            <NavDropdown
              title="Restaurants"
              id="basic-nav-dropdown"
              className="nav-dropdown"
            >
              <NavDropdown.Item href="./pages/Vegan">Vegan</NavDropdown.Item>
              <NavDropdown.Item href="./pages/VeganFriendly">
                Vegan-Friendly
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="./pages/Events">Events</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
