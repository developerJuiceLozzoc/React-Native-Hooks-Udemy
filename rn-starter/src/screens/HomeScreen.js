import React from "react";
import {View,Button, Text, StyleSheet,TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return (<View>
      <Button
        onPress= {()=>{navigation.navigate("Components")} }
        style={styles.text} title="Components Page"/>
      <Button style={styles.text} title="List Page" />
      <TouchableOpacity
      style={styles.button}
      onPress= {()=>{navigation.navigate("List")}}>
        <Text> GO to list demo </Text>
        <Text> GO to list demo </Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={styles.button}
      onPress= {()=>{navigation.navigate("ImageList")}}>
        <Text> GOTO image </Text>
        <Text> GOTO image </Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={styles.button}
      onPress= {()=>{navigation.navigate("Counter")}}>
        <Text> GO to Counter </Text>
        <Text> GO to Counter </Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={styles.button}

        onPress= {()=>{navigation.navigate("RandoColor")}}>
        <Text> Pick a color</Text>
        <Text> actually we will pick for your </Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={styles.button}

        onPress= {()=>{navigation.navigate("Adjuster")}}>
        <Text> Pick a color</Text>
        <Text> adjust it slightly how you wills</Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={styles.button}

        onPress= {()=>{navigation.navigate("TInput")}}>
        <Text>Text input stuff</Text>
        <Text> text input stuff</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress= {()=>{navigation.navigate("Layouts")}}>
        <Text>Making pretty layoyuts</Text>
        <Text> is much harder than you would expect</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,

  },
  button: {
    paddingVertical: 15
  }
});

export default HomeScreen;
