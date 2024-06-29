import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const Navigationbar = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <Navbar bg={darkMode ? "dark" : "light"} variant={darkMode ? "dark" : "light"} expand="lg" className="fixed-top px-1">
        <Container fluid className="px-1">
          <Navbar.Brand as={Link} to="/" className="ms-1">React News</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/business">Business</Nav.Link>
              <Nav.Link as={Link} to="/entertainment">Entertainment</Nav.Link>
              <Nav.Link as={Link} to="/general">General</Nav.Link>
              <Nav.Link as={Link} to="/health">Health</Nav.Link>
              <Nav.Link as={Link} to="/science">Science</Nav.Link>
              <Nav.Link as={Link} to="/sports">Sports</Nav.Link>
              <Nav.Link as={Link} to="/technology">Technology</Nav.Link>
            </Nav>
            <Button onClick={toggleDarkMode} variant={darkMode ? "light" : "dark"} className="ms-auto">
              {darkMode ? "Light Mode" : "Dark Mode"}
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigationbar;
