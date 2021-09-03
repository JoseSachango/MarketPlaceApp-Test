
import React, { Component } from "react";
import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import {useAuth0} from "@auth0/auth0-react"


const IntroStatment = () => {

    const {loginWithRedirect,logout,isAuthenticated} = useAuth0();

    

       
            return(

                !isAuthenticated && (
                    <>  
                        <h1 className="font-monospace text-center fw-bold" style={{ width: '800px',height:"150px", position: "absolute",top:"250px",left:"200px",color:"white"}}>Step Into The World of Angolan Coffee </h1>
                    </>

                )
            
                
            )
        

    
   
}

export default IntroStatment