import React from "react"
import {useAuth0} from "@auth0/auth0-react"
import Button from "react-bootstrap/Button"
/*style={{ position: "absolute",top:"400px",left:"510px"}} */

const LoginButton = () =>{
    const {loginWithRedirect,logout,isAuthenticated} = useAuth0();

    
    return (
        !isAuthenticated && (
            <Button className="font-monospace fw-bold" size="lg"  onClick={()=>loginWithRedirect()}>
                Log In/Sign Up
            </Button>

        )
    )
}


export default LoginButton