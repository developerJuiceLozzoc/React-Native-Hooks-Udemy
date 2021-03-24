import React, {useContext} from 'react';
import {useState,useEffect} from "react"
import { StyleSheet, Text, View,
  FlatList,Button,
  TouchableOpacity} from 'react-native';
import {EvilIcons } from "@expo/vector-icons"

import {Context} from "../context/BlogContext"

function ShowScreen({navigation}){
  const {state} = useContext(Context)
  const blogPost = state.find(function(post){
    return post.id == navigation.getParam('bid')
  })
  return (<View>
    <Text>{blogPost.title}</Text>
    <Text>{blogPost.content}</Text>


  </View>)

}
ShowScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Edit',{bid: navigation.getParam('bid')})}>
        <EvilIcons name="pencil" size={30} />
      </TouchableOpacity>
    )
  }
}
const s = StyleSheet.create({

})
export default ShowScreen
