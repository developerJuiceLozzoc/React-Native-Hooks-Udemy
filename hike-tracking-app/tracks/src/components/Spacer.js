import React from "react"
import {View,StyleSheet} from "react-native"

function Spacer({children}){
  return (<View style={s.spacer}>
    {children}
  </View>)
}

const s = StyleSheet.create({
  spacer: {
    marginVertical: 15
  }
})

export default Spacer
