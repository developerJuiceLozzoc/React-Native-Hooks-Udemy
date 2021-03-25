import React, {useContext} from "react"
import {View,Text,StyleSheet} from "react-native"
import {SafeAreaView} from "react-navigation"
import {Context} from "../context/authContext"
import {Button } from "react-native-elements"
import Spacer from "../components/Spacer"

import {FontAwesome} from "@expo/vector-icons"

function AccountScreen(){
  const {signout} = useContext(Context)
  return (<SafeAreaView>
    <Spacer>
      <Text>Account </Text>
      <Button
        title="Sign Out"
        onPress={function(){
          signout()
        }} />
    </Spacer>
  </SafeAreaView>)
}

const s = StyleSheet.create({})

AccountScreen.navigationOptions = {
  title: "Account",
  tabBarIcon: <FontAwesome name="gear" size={20}/>
}

export default AccountScreen
