import "../_mockLocation"
import React, {Component} from "react"
import {SafeAreaView, withNavigationFocus} from "react-navigation"
import {View, StyleSheet} from "react-native"
import {Text} from "react-native-elements"
import {Context as LocationContext} from "../context/locationContext"
import Map from "../components/Map"
import UseLocation from "../hooks/useLocation"
import TrackForm from "../components/TrackForm"
import {FontAwesome} from "@expo/vector-icons"

class TrackCreateScreen extends Component {
  static contextType = LocationContext
  constructor(){
    super()
    this.state = {
      error: null
    }
  }
  render(){
    const {state: { recording}, addLocation, startRecording,stopRecording} = this.context
    const {isFocused} = this.props
    return (<SafeAreaView>
      <Text> Create A Track </Text>
      <Map />
      <TrackForm />
      <UseLocation sendLocation={function(location){
        addLocation(location,recording)
      }} shouldTrack={isFocused} toggler={recording}/>
    </SafeAreaView>)
  }
}


const s = StyleSheet.create({
  error: {
    color: "red"
  }
})

TrackCreateScreen.navigationOptions = {
  title: "Add Track",
  tabBarIcon: (<FontAwesome name="plus" size={20} />)
}



export default withNavigationFocus(TrackCreateScreen)
