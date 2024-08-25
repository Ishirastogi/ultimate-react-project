import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useTheme } from "../context/ThemeContext";

function Header() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Navbar
      bg={isDarkMode ? "dark" : "light"}
      variant={isDarkMode ? "dark" : "light"}
      expand="lg"
    >
      <Container>
        <Navbar.Brand href="/">Ultimate React Site</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/dashboard">
              <Nav.Link>Dashboard</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/register">
              <Nav.Link>Register</Nav.Link>
            </LinkContainer>
          </Nav>
          <Button
            variant={isDarkMode ? "secondary" : "primary"}
            onClick={toggleTheme}
          >
            {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
