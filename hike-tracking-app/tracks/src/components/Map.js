import React, {useContext} from "react"
import {View,Text,StyleSheet, ActivityIndicator} from "react-native"
import MapView, {Polyline,Circle} from "react-native-maps"
import {Context as LocationContext} from "../context/locationContext"


function Map(){
  const { state: { locations, currentLocation} }= useContext(LocationContext)
  if(!currentLocation){
    return <ActivityIndicator size="large" style={{marginTop:200}} />
  }

  return (<View>
    <MapView style={s.map}
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      region={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}>
      <Circle
        center={currentLocation.coords}
        radius={30}
        strokeColor="rgba(158,158,255,0.5)"
        />
      <Polyline coordinates={locations.map(function(el){return el.coords})}/>

      </MapView>
  </View>)
}

const s = StyleSheet.create({
  map: {
    height: 300
  }
})
export default Map
