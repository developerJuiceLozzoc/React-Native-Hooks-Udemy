import React from "react"
import {View,Text,StyleSheet,Button} from "react-native"

function TrackListScreen({navigation}){
  return (<View>
    <Text>List my tracks </Text>
    <Button
      title="go to detail"
      onPress={function(){
        navigation.navigate("Detail")
      }} />
  </View>)
}

const s = StyleSheet.create({})
export default TrackListScreen
