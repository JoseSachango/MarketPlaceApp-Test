import React, { Component,useContext } from "react";
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
import Card from "react-bootstrap/Card"
import DeveloperContext from "../../utils/DeveloperContext"
import API from "../../utils/API"

//You most create and axios instance with a base url when using react and axios together
const axios = require("axios")
const axiosinstance = axios.create({
    baseURL: 'http://localhost:3000'
  });


//JSON.stringify(user,null,2)


const UserSelectionExperiment = () => {

    const {loginWithRedirect,logout,isAuthenticated,user} = useAuth0(); //React hook for functional componenets
    const {name,age,height} = useContext(DeveloperContext)
    console.log("This is the user informaiton", JSON.stringify(user,null,2))

    const handleProducerClick = () =>{

        axiosinstance.post("/api/user/post",{googleId:user.sub,name:user.name,userType:"jjj"}).then(resultPost=>{
            console.log("Succefully posted user data. This is what was returned: ",resultPost)
          }).catch(errPost=>{
            console.log("There was an error with the posting of a new user: ",errPost)
          })
    }   

    /*
    if(isAuthenticated){
        API.postUserInfo("/api/user/post",{googleId:user.sub,name:user.name,userType:"jjj"}).then(resultPost=>{
                console.log("Succefully posted user data. This is what was returned: ",resultPost)
            }).catch(errPost=>{
                console.log("There was an error with the posting of a new user: ",errPost)
            })

        API.getUserInfo("/marketplace/api/user/"+user.sub).then(result=>{
            console.log("This is the result of the query for a specific user: ",result)
        }).catch(err=>{
            console.log("There was an error encountered trying to query for a specific user: ",err)
            
        })
        console.log("Conditional worked. Querying user with the following id",user.sub)
    }*/


    return (
        isAuthenticated && (
            
            <Container className="bg-light" style={{height:"100vh",backgroundColor:"yellow"}}  fluid>
                <Row style={{height:"5rem",backgroundColor:"blue",top:"50px"}}>

                </Row>
                <Row style={{height:"15rem",backgroundColor:"red",top:"50px"}}>
                  
                  
                    <Col xl={3} >
                       
                    </Col>
                    <Col xl={4}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://imgur.com/YUa0O1z.png" />
                            <Card.Body>
                                <Card.Title>Roaster</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Register As Roaster</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col  xl={4}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://imgur.com/YUa0O1z.png" />
                            <Card.Body>
                                <Card.Title>Producer</Card.Title>
                                <Card.Text>
                                {user.sub}
                                </Card.Text>
                                <Button variant="primary" onClick={handleProducerClick}>Register As Producer</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col  xl={1}>
                       
                    </Col>
                   
                    
                </Row>
            </Container>
        )

    )
}


export default UserSelectionExperiment