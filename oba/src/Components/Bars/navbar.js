
import React, { useState, Fragment } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../../Style/navStyle.css'
import { NavLink } from 'react-router-dom';
import homeIcon from '../../Images/Home/Nav/home.png'

const TopNavbar = () => {
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);
    return (
        <>
            {['md'].map((expand) => (
                <Navbar key={expand} expand={expand} className='navbar  navbarCustom mb-3 p-2' >
                    <Container fluid>
                        <Navbar.Brand href="#" className='obaTopic'>
                            <img src={homeIcon}
                                alt="home icon"
                                className='homeIcon col-sm-1 d-lg-none'
                            />
                        </Navbar.Brand>
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
                                <Nav className="justify-content-end align-items-center flex-grow-1 mx-2 pe-1">
                                    <Nav.Link className='navItem px-5'>
                                        <NavLink to="/" className='navItem'>
                                            <i className="glyphicon glyphicon-home"></i> <span>
                                                <img src={homeIcon}
                                                    alt="home icon"
                                                    className='homeIcon'
                                                />
                                            </span>
                                        </NavLink>
                                    </Nav.Link>
                                    <Nav.Link className='navItem px-4'>
                                        <NavLink to="/school" className='navItem'>
                                            <i className="glyphicon glyphicon-home"></i> <span>School</span>
                                        </NavLink>
                                    </Nav.Link>
                                    <div className='navItem px-3'>
                                        <NavDropdown title="OBA">
                                            <NavDropdown.Item href="/commitee">Committe</NavDropdown.Item>
                                            <NavDropdown.Item href="/media">
                                                Media
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                    </div>
                                    <Nav.Link className='navItem px-3'>
                                        <NavLink to="/events" className='navItem'>
                                            <i className="glyphicon glyphicon-home"></i> <span>Events</span>
                                        </NavLink>
                                    </Nav.Link>
                                    <Nav.Link className='navItem px-3'>
                                        <NavLink to="/£" className='navItem'>
                                            <i className="glyphicon glyphicon-home"></i> <span>Store</span>
                                        </NavLink>
                                    </Nav.Link>
                                    <Nav.Link className='navItem'>
                                        <NavLink to="/contact" className='navItem px-3'>
                                            <i className="glyphicon glyphicon-home"></i> <span className='btn btn-success btnComm'>Contact Us</span>
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