import React from "react"
import {Text,TouchableOpacity,StyleSheet} from "react-native"


function Button({children,doStuff}){
  return (
    <TouchableOpacity style={s.buttonStyle}
      onPress={doStuff}>
      <Text style={s.textStyle}> {children} </Text>
    </TouchableOpacity>
  )
}

const s = StyleSheet.create({
  textStyle: {
    alignSelf: "center",
    color: "#007aff",
    fontSize: 16,
    fontWeight: "600",
    paddingVertical: 10,
  },
  buttonStyle: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 1,
    borderColor: "#007aff",
    marginHorizontal: 5,
  }
})

export default Button
