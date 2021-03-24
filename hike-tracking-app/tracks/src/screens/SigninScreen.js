import React from "react"
import {View,Text,StyleSheet,Button} from "react-native"

function SigninScreen({navigation}){
  return (<>
    <Text>Sign In </Text>
    <Button
      title="Dont have an Account? SIGN UP"
      onPress={function(){
        navigation.navigate("Signup")
      }} />
    <Button
      title="Login"
      onPress={function(){
        navigation.navigate("Create")
      }} />

  </>)
}

const s = StyleSheet.create({})
export default SigninScreen
