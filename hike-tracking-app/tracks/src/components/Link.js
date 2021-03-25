import React from "react"
import {View,Text,StyleSheet,TouchableOpacity} from "react-native"
import {withNavigation} from "react-navigation"

function NavLink({text,routeName,navigation}){
    return (
      <TouchableOpacity
        onPress={function(){
          navigation.navigate(routeName)
        }} >
        <Text style={s.link}>{text}</Text>
      </TouchableOpacity>
  )
}
const s = StyleSheet.create({
  link: {
    color: "blue",
    fontSize: 16
  }
})

export default withNavigation(NavLink)
