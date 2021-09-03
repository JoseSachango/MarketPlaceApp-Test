import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import {useAuth0} from "@auth0/auth0-react"


/*add fluid inside the image component to make it stretch the entire page */

const FirstImage = () => {

    const {loginWithRedirect,logout,isAuthenticated} = useAuth0();

   

        return(

            !isAuthenticated && (
                <>
                    {/*
                        <Row>
                            <Col  lg={12} xl={12}>
                                <Image src="https://imgur.com/b5MM8Fb.png"  fluid/>
                                
                            </Col>

                            
                        </Row>
                     */}
                    
                
                    
                </>
            )
        )

    
   
}

export default FirstImage