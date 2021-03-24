import React, {useContext} from 'react';
import {useState,useEffect} from "react"
import { StyleSheet, Text, View,
  FlatList, TextInput, Button,
  TouchableOpacity} from 'react-native';
import {Feather } from "@expo/vector-icons"



function BlogForm({title,setTitle,body,setBody,onSubmit}){
  return (<View>
    <Text style={s.label}> Enter Title:</Text>
    <TextInput
      style={s.input}
      onChangeText={setTitle}
      value={title} />
    <Text style={s.label}> Enter Content:</Text>
    <TextInput
      style={s.input}
      onChangeText={setBody}
      value={body} />
    <Button
      title="Save Post"
      onPress={onSubmit}
      />



  </View>)
}



  const s = StyleSheet.create({
    input: {
      fontSize: 18,
      borderWidth: 1,
      borderColor: "black",
      marginBottom: 15,
      padding: 5,
      margin: 5,
    },
    label: {
      fontSize: 20,
      marginBottom: 5,
      marginLeft: 5,
    }
  })


  export default BlogForm;
