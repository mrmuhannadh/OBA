import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../../Style/navStyle.css'

const TopNavbar = () => {
    return (
        <>
            {['md'].map((expand) => (
                <Navbar key={expand} bg="light" expand={expand} className="mb-3 p-2 myNav">
                    <Container fluid>
                        <Navbar.Brand href="#" className='obaTopic'>OBA</Navbar.Brand>
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
                                    <Nav.Link href="#action1" className='navItem'>Home</Nav.Link>
                                    <Nav.Link href="#action2" className='navItem'>School</Nav.Link>
                                    <Nav.Link href="#action2" className='navItem'>Link</Nav.Link>
                                    <Nav.Link href="#action2">
                                        <button className='btn btn-danger btnContact'>CONTACT US</button>
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