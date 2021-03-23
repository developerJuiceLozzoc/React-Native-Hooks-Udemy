import React,{Component} from "react"
import {Text, StyleSheet,View} from "react-native"


function ComponentsScreen(){
  let myname = "Konner"
  return (<View>
    <Text style={styles.textStyle}>Getting Started with ReactNative</Text>
    <Text style={styles1.textStyle}> Greetings, my name is {myname} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  }
})

const styles1 = StyleSheet.create({
  textStyle: {
    fontSize: 20
  }
})

export default ComponentsScreen
