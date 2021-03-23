import React, {useContext} from 'react';
import {useState,useEffect} from "react"
import { StyleSheet, Text, View,FlatList,Button} from 'react-native';
import {Context} from "../context/BlogContext"

function IndexScreen(){
  const {state, addBlogPost} = useContext(Context)
  return (<View>
    <Text>Index Screen</Text>
    <Button
      title="add blog post"
      onPress={function(){
        addBlogPost()
      }} />
    <FlatList
      data={state}
      keyExtractor={(item)=> item.title}
      renderItem={function({item}){
        return <Text>{item.title}</Text>
      }}
      />

  </View>)

}

const s = StyleSheet.create({

})
export default IndexScreen
