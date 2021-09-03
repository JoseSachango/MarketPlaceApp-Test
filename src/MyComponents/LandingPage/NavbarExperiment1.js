import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import {Link, useLocation} from "react-router-dom"
import {useAuth0} from "@auth0/auth0-react"


const NavBarExperiment = () => {
        const location = useLocation()
        const {loginWithRedirect,logout,isAuthenticated} = useAuth0(); //React hook for functional componenets


        return(
            !isAuthenticated && (
                <>
                <Nav className="bg-transparent" style={{position: "absolute", left:"20px"}} variant="light">
                    <div className="container-fluid">
                        <span className="navbar-brand mb-0 h1 font-monospace fw-bold">Name</span>
                    </div>
                </Nav>
            
                </>

            )
        )

    
   
}

export default NavBarExperiment