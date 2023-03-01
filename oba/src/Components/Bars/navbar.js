import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../../Style/navStyle.css'
import { NavLink } from 'react-router-dom';
import logo from '../../Images/Home/Logo.png'

const TopNavbar = () => {
    return (
        <>
            {['md'].map((expand) => (
                <Navbar key={expand} bg="light" expand={expand} className="mb-3 p-2 myNav">
                    <Container fluid>
                        <Navbar.Brand href="#" className='obaTopic'> 
                            <img src={logo}
                            className='navLogo'
                            alt="logo"/>
                            OBA</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    OBA
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end align-items-center flex-grow-1 pe-3">
                                    <Nav.Link className='navItem'>
                                        <NavLink to="/" className='navItem'>
                                            <i className="glyphicon glyphicon-home"></i> <span>Home</span>
                                        </NavLink>
                                    </Nav.Link>
                                    <Nav.Link className='navItem'>
                                        <NavLink to="/school" className='navItem'>
                                            <i className="glyphicon glyphicon-home"></i> <span>School</span>
                                        </NavLink>
                                    </Nav.Link>
                                    <Nav.Link className='navItem'>
                                        <NavLink to="/events" className='navItem'>
                                            <i className="glyphicon glyphicon-home"></i> <span>Events</span>
                                        </NavLink>
                                    </Nav.Link>
                                    <Nav.Link className='navItem'>
                                        <NavLink to="/contact" className='navItem'>
                                            <i className="glyphicon glyphicon-home"></i> <span>Contact Us</span>
                                        </NavLink>
                                    </Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    )
}

export default TopNavbar