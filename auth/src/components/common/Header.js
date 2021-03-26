import React from "react"
import {StyleSheet,View,Text} from 'react-native'


function Header({title}){
  return (
    <View style={s.viewStyle}>
      <Text style={s.textStyle}> {title} </Text>
    </View>
  )
}

const s = StyleSheet.create({
  textStyle: {
    fontSize: 20,

  },
  viewStyle: {
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    height: 60,
    justifyContent: "center",
    paddingTop: 30,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2
  }
})


export default Header
