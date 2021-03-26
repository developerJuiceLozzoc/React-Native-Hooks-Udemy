import React from "react"
import {StyleSheet,View } from 'react-native'


function Card({children}){
  return (
    <View style={s.containerStyle}>
      {children}
    </View>
  )
}

const s = StyleSheet.create({
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    borderBottomWidth: 0,

    shadowColor: "#000",
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.1,
    shadowRadius: 2,

    elevation: 1,
    marginHorizontal: 5,
    marginTop: 10,

  }
})


export default Card
