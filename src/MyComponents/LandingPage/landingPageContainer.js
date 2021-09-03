import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import {useAuth0} from "@auth0/auth0-react"
import LoginCard from "./LoginCard"





const LandingPageContainer = () => {

    const {loginWithRedirect,logout,isAuthenticated} = useAuth0(); //React hook for functional componenets



    return (
        !isAuthenticated && (
            <Container className="bg-success" style={{height:"100vh"}}  fluid>
                <Row style={{backgroundColor:"blue",height:"5rem"}}>
                    <Col>1 of 1</Col>
                </Row>
                <Row style={{height:"9rem",backgroundColor:"red"}}>Burr</Row>
                <Row style={{height:"15rem",backgroundColor:"yellow"}}>
                    <Col xl={2}>
                        Hello World
                    </Col>
                    <Col xl={4} >
                        {/*https://imgur.com/b5MM8Fb.png */}
                        <Image style={{backgroundColor:"red"}} src="https://imgur.com/YUa0O1z.png" roundedCircle/>
                        {/*https://imgur.com/YUa0O1z*/}
                    </Col>
                    <Col xl={4}>
                        <LoginCard/>
                    </Col>
                    <Col xl={2}>
                        Hello World
                    </Col>
                </Row>
            </Container>
        )

    )
}


export default LandingPageContainer