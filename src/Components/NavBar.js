import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Nav.css';

const NavBar = () => {
  return (
    <div>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Pages" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">About</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Our Team</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">FAQ'S</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Booking</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Error 404</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Login / Register</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Services</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Services Details</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Blog" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Blog</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Blog Details</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#contact">Contact Us</Nav.Link>
            <Nav.Link href="#contact"><i class="fa-solid fa-magnifying-glass"></i></Nav.Link>
            <Nav.Link href="#contact"><i class="fa-solid fa-phone"></i></Nav.Link>
            <Nav.Link href="#contact">(+01) 999 888 777</Nav.Link>
            <Nav.Link>
               <button>contact us <i class="fa-solid fa-arrow-right"></i></button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar
