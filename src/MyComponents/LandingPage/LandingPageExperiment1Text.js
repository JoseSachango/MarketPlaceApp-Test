import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import {useAuth0} from "@auth0/auth0-react"
import LoginCard from "./LoginCard"






const LandingPageExperiment = () => {

    const {loginWithRedirect,logout,isAuthenticated} = useAuth0(); //React hook for functional componenets



    return (
        !isAuthenticated && (
            
           
            <p style={{height:"15rem",backgroundColor:"yellow",left:"200px",position:"absolute"}} className="fs-1" >.fs-1 text</p>
                
          
        )

    )
}


export default LandingPageExperiment