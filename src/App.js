import React, {useState} from "react"
import logo from './logo.svg';
import './App.css';
import NavBar from "./MyComponents/LandingPage/NavBar"
import FirstImage from "./MyComponents/LandingPage/IntroImage"
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from "./MyComponents/LandingPage/jumbotron"
import IntroStatment from "./MyComponents/LandingPage/IntroStatment"
import LoginButton from "./MyComponents/LandingPage/LoginButton"
import LogoutButton from "./MyComponents/LandingPage/LogoutButton"
import {useAuth0} from "@auth0/auth0-react"
import LandingPageContainer from "./MyComponents/LandingPage/landingPageContainer"
import LandingPageExperiment from "./MyComponents/LandingPage/LandingPageExperiment1"
import LandingPageExperiment1Text from "./MyComponents/LandingPage/LandingPageExperiment1Text"
import {BrowserRouter as Router, Route} from "react-router-dom"
import NavBarExperiment from "./MyComponents/LandingPage/NavbarExperiment1"
import DeveloperContext from "./utils/DeveloperContext"
import NavBarTwo from "./MyComponents/LandingPage/NavBarExperiment2"
import UserSelectionExperiment from "./MyComponents/LandingPage/UserSelectionExperiment1"





function App() {

  const [developerState,setDeveloperState]= useState({
    name:"Jose"
  })
  const {loginWithRedirect,logout,isAuthenticated} = useAuth0();

  return (

    <Router>
        <>

            {/*
              <NavBar/>
              <FirstImage/>
              
              <IntroStatment/>
              <LoginButton/>
              <LogoutButton/>
              <NavBar/>
            */}
            
            <Route exact path={["/"]}>
              <DeveloperContext.Provider value={developerState}>
                <NavBarExperiment/>
                <NavBarTwo/>
                <LandingPageExperiment/>
                <UserSelectionExperiment/>
               
              </DeveloperContext.Provider>
            </Route>
            {/*<LandingPageContainer/>*/}
            {/*<LandingPageExperiment1Text/>*/}
           


        </>

    </Router>

    
  );
}

export default App;
