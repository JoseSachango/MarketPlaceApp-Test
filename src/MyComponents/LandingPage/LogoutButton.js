import React from "react"
import {useAuth0} from "@auth0/auth0-react"
import Button from "react-bootstrap/Button"


const LogoutButton = () =>{
    const {loginWithRedirect,logout,isAuthenticated} = useAuth0();


    return (
        isAuthenticated && (
            <Button className="font-monospace fw-bold" size="lg" style={{ position: "absolute",top:"400px",left:"510px"}} onClick={()=>logout()}>
                Logout
            </Button>
        )
    )
}


export default LogoutButton