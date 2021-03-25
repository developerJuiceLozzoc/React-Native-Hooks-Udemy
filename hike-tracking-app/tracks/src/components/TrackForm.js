import React, {useContext} from "react"
import {StyleSheet} from "react-native"
import {Input,Button } from "react-native-elements"
import {withNavigation} from "react-navigation"
import Spacer from "./Spacer"
import {Context as LocationContext} from "../context/locationContext"
import {Context as TrackContext} from "../context/trackContext"
import useSaveTrack from "../hooks/useSaveTrack"


function TrackForm({navigation}){
  const { state: {trackName,recording,locations},
  startRecording,stopRecording, changeTrackName, resetTracker } = useContext(LocationContext)
  const saveTrack = useSaveTrack(function(status){
    if(status){
      resetTracker()
      navigation.navigate("List")
    }
  })

  return (<>
    <Spacer>
      <Input
        value={trackName}
        placeholder="Enter a name for your hike!"
        onChangeText={changeTrackName}/>
    </Spacer>
    <Button
      title={recording ? "Stop Recording" : "Start Recording"}
      onPress={recording ? stopRecording : startRecording}/>
    <Spacer>
    {!recording && locations.length > 0 && (
      <Button title="Save Recording"
        onPress={function(){
          saveTrack(trackName,locations)
        }} />
    )}
    </Spacer>
  </>)
}

const s = StyleSheet.create({})
export default withNavigation(TrackForm)
