import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">    
            <Navbar.Brand href="/">Tuner</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/songs">All Songs</Nav.Link>
                    <Nav.Link href="/new">New Song</Nav.Link>
                </Nav>
            </Navbar.Collapse> 
        </Navbar>
    );
};

export default Header;