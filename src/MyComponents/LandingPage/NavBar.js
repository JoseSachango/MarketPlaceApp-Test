import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import {Link, useLocation} from "react-router-dom"

const NavBar = () => {
        const location = useLocation()

        return(

            <>
            <Navbar className="bg-transparent" style={{position: "absolute", left:"20px"}} variant="light">
                <Container >
                    <Navbar.Brand className="font-monospace fw-bold" href="#home">Name</Navbar.Brand>
                    <Nav className="me-auto font-monospace fw-bold">
                        <Nav.Link href="#home">
                            <Link to="/" className={location.pathname=== "/"?"nav-link active":"nav-link"}>
                                About Us
                            </Link>
                        </Nav.Link>
                        {/*<Nav.Link href="#home">About Us</Nav.Link>*/}
                        <Nav.Link href="#features">Blog</Nav.Link>
                        <Nav.Link href="#pricing">How it Works</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
          
            </>
        )

    
   
}

export default NavBar