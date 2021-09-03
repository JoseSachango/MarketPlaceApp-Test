import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import {useAuth0} from "@auth0/auth0-react"
import LoginCard from "./LoginCard"
import LoginButton from "./LoginButton"
import Button from "react-bootstrap/Button"
import axios from "axios";





const LandingPageExperiment = () => {

    const {loginWithRedirect,logout,isAuthenticated} = useAuth0(); //React hook for functional componenets



    return (
        !isAuthenticated && (
            <Container className="bg-light" style={{height:"100vh"}}  fluid>
                
                <Row style={{height:"15rem"}}>
                  
                  
                    <Col >
                        <Row>
                            <Image  style={{width:"1700px"}} src="https://imgur.com/b5MM8Fb.png" fluid/>

                        </Row>
                        <Row style={{position:"absolute",top:"10rem",width:"100vw"}}>
                            <Col xl={1}>
                                
                            </Col>
                    
                            <Col xl={7}>
                                <Row>
                                    <p style={{height:"15rem", color:"white"}} className="display-1  ps-5 font-monospace fw-bold" absolute>Step into the world on Angolan Coffee</p>

                                </Row>
                                <Row style={{top:"20px"}}>
                                    <p style={{height:"10rem", color:"white"}} className="display-6  ps-5 font-monospace " absolute>Foster relationships impact communities using our app</p>

                                </Row>
                                <Row  style={{}}>
                                    <Col xl={3}>

                                    </Col>
                                    <Col xl={5}>
                                        <Button className="font-monospace fw-bold" size="lg"  onClick={()=>loginWithRedirect()}>
                                            Log In/Sign Up
                                        </Button>
                                    </Col>
                                    <Col xl={4}>

                                    </Col>
                                 
                                </Row>

                            </Col>
                            <Col xl={4}>

                            </Col>
                            
                    
                
                        </Row>
                    </Col>
                   
                    
                </Row>
            </Container>
        )

    )
}


export default LandingPageExperiment