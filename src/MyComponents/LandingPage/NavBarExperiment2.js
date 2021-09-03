import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import {useAuth0} from "@auth0/auth0-react"
import {Link, useLocation} from "react-router-dom"
import LogoutButton from "./LogoutButton"
import Button from "react-bootstrap/Button"


const NavBarExperimentTwo = () => {
        const location = useLocation()
        const {loginWithRedirect,logout,isAuthenticated} = useAuth0(); //React hook for functional componenets


        return(
            isAuthenticated && (
                <>
                        <Nav class="navbar navbar-expand-lg navbar-light bg-light">
                            <div class="container-fluid">
                                <a class="navbar-brand" href="#">Navbar</a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li  className="nav-item">
                                        <Link to="/" className={location.pathname=== "/"?"nav-link active":"nav-link"}>
                                            About Us Hello
                                        </Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link to="/" className={location.pathname=== "/"?"nav-link active":"nav-link"}>
                                            Another one
                                        </Link>
                                    </li>
                                    
                                </ul>
                                
                                <Button className="font-monospace fw-bold" size="sm" onClick={()=>logout()}>
                                    Logout
                                </Button>
                                
                               
                                {/*<form class="d-flex">
                                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                    <button class="btn btn-outline-success" type="submit">Search</button>
                                </form>*/}
                                </div>
                            </div>
                        </Nav>
                </>

            )
        )

    
   
}

export default NavBarExperimentTwo