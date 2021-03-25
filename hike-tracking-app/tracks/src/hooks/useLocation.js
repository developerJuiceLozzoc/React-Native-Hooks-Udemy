import {useState,useEffect} from 'react'
import {View,Text} from "react-native"

import {
  Accuracy,
  requestPermissionsAsync,
  watchPositionAsync
} from "expo-location"


/*
lessons learned from use useEffect
the function executed from useeffect concretes any variable
at the time of executin, even if its a funciton that is an
interval.


the array at the end of changing variables is very important
to change what needs to happen.

any and all varaibles mentioned in useeffect should be
placed inthe [] at the end
*/

function LocationHook({sendLocation,shouldTrack,toggler}){
  const [err,setError] = useState(null)
  const [subscriber,setSubscriber] = useState(null)



  const startWatching = async() => {
    try{
      const {granted} = await requestPermissionsAsync()
      if(!granted){
        throw new Error("Permission Denied")
      }
      const subs = await watchPositionAsync({
        accuracy:Accuracy.BestForNavigation,
        timeInterval: 1000,
        distanceInterval: 10,
      },function(location){
        sendLocation(location)
      })
      setSubscriber(subs)
    }
    catch(e){
      this.setState({
        error: e.message
      })
    }
  }

  useEffect(function(){
    if(!shouldTrack && subscriber){
      subscriber.remove()
      setSubscriber(null)
    }
    else{
      startWatching()
    }
    //=========
    return function(){
      if (subscriber) {
        subscriber.remove()
      }
    }
    // ======
  },[shouldTrack,toggler])

  if(err){
    return <Text>{err}</Text>
  }
  else{
    return null
  }
}

export default LocationHook
