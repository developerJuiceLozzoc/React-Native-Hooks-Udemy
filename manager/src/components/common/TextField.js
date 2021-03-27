import React from "react"
import {TextInput,View,Text,StyleSheet} from "react-native"

function TextField({value,setValue,label,placeholder}){
  return (
    <View style={s.containerStyle}>
      <Text style={s.labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={label == "Password" ? true : false}
        autocorrect={false}
        autoCapitalize="none"
        placeholder={placeholder}
        style={s.inputStyle}
        onChangeText={setValue}
        value={value}/>
    </View>
  )
}

const s = StyleSheet.create({
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  inputStyle: {
    color: "#000",
    paddingHorizontal: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 3
  }
})

export default TextField
