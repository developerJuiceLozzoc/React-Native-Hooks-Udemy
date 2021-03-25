import {useState,useContext,useEffect} from "react"
import {Context as TrackContext} from "../context/trackContext"
import {Context as LocationContext} from "../context/locationContext"



export default function(callback){
  const {createTrack} = useContext(TrackContext)
  const { state: { locations, trackName }} = useContext(LocationContext)

  return function(){
    createTrack(trackName,locations,callback)
  }
}
