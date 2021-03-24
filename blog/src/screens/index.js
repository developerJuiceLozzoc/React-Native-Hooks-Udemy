import React, {useContext} from 'react';
import {useState,useEffect} from "react"
import { StyleSheet, Text, View,
  FlatList,Button,
  TouchableOpacity} from 'react-native';
import {Context} from "../context/BlogContext"
import {Feather } from "@expo/vector-icons"

function IndexScreen({navigation}){
  const {state, addBlogPost,deleteBlogPost} = useContext(Context)
  return (<View>
    <Text>Index Screen</Text>
    <Button
      title="add blog post"
      onPress={function(){
        addBlogPost()
      }} />
    <FlatList
      data={state}
      keyExtractor={(item)=> `${item.id}`}
      renderItem={function({item}){
        return (
          <TouchableOpacity
            onPress={function(){
              navigation.navigate("Show",{bid: item.id})
            }}>
            <View style={s.row}>
              <Text style={s.title}>{item.title}</Text>
              <TouchableOpacity
                onPress={function(){
                  deleteBlogPost(item.id)
                }} >
                  <Feather style={s.icon} name="trash" />
              </TouchableOpacity>
              </View>
          </TouchableOpacity>)
      }}
      />

  </View>)

}

IndexScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    )
  }
}

const s = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    paddingVertical: 10
  },
  title:{
    fontSize: 18
  },
  icon:{
    fontSize: 24
  },
})
export default IndexScreen
