import React, {useState,useContext,useEffect} from "react"
import {Context} from "../context/authContext"


function ResolveAuthScreen(){
  const {tryLocalSignin} = useContext(Context)
  useEffect(function(){
    tryLocalSignin()
  },[])
  return null
}

export default ResolveAuthScreen
