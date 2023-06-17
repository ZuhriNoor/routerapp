import React from 'react'
import { Route, Routes, Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header() {
  return (
    <div>
        
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/"><Link to="/">Home</Link></Nav.Link>
            <Nav.Link to="/about"><Link to="/about">About</Link></Nav.Link>
            <Nav.Link to="/contact"><Link to="/contact">Contact</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      
    </div>
  )
}

