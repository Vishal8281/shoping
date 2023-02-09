import { useState, createContext, useContext } from "react";
import { useLocation } from 'react-router-dom';




const Profile=()=>{


  const {state} =useLocation()
    console.log("hiiii",state)

    return(
       
        <>
        Profile
        </>
    )




}

export default Profile;