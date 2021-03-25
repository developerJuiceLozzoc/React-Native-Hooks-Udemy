import React, {useContext} from "react"
import {View, StyleSheet} from "react-native"
import MapView, {Polyline,Circle} from "react-native-maps"
import {Context} from "../context/trackContext"
import {Text} from "react-native-elements"



function dateToYMD(date) {
    var strArray=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var d = date.getDate();
    var m = strArray[date.getMonth()];
    var y = date.getFullYear();
    return '' + (d <= 9 ? '0' + d : d) + '-' + m + '-' + y;
}



function TrackDetailScreen({navigation}){
  const _id = navigation.getParam("id")
  const {state} = useContext(Context)

  const track = state.find(function(t){ return t._id == _id})
  console.log(track);
  const createdOn = new Date(track.locations[0].timestamp)
  const initialCoords = track.locations[0].coords


  return (<View>
    <Text h3>Details of Track </Text>
    <Text> {track.name} created on {dateToYMD(createdOn)}</Text>
    <MapView
      style={s.map}
      initialRegion={
        {
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initialCoords
        }
      }
      >
      <Polyline
        coordinates={track.locations.map(loc => loc.coords)} />
    </MapView>
    <Text> #{track._id}</Text>
  </View>)
}

const s = StyleSheet.create({
  map: {
    height: 300
  }
})
export default TrackDetailScreen
