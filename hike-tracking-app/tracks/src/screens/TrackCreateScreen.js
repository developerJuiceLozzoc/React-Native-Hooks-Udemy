import React from "react"
import {SafeAreaView} from "react-navigation"
import {View, StyleSheet} from "react-native"
import {Text} from "react-native-elements"

import Map from "../components/Map"

function TrackCreateScreen(){
  return (<SafeAreaView>
    <Text> Create A Track </Text>
    <Map />
  </SafeAreaView>)
}

const s = StyleSheet.create({})
export default TrackCreateScreen
