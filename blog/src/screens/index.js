import React, { useContext } from "react";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text, View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

function IndexScreen({ navigation }) {
  const { state, deleteBlogPost, getBlogPosts } = useContext(Context);
  useEffect(function () {
    getBlogPosts();
    const listener = navigation.addListener('didFocus',function(){
      getBlogPosts()
    })
    /* by returning a function we have access to component will unmount
    */
    return ()=>{
      listener.remove()
    }
  },[]);

  return (
    <View>
      <Text>Index Screen</Text>
      <FlatList
        data={state}
        keyExtractor={(item) => `${item.id}`}
        renderItem={function ({ item }) {
          return (
            <TouchableOpacity
              onPress={function () {
                navigation.navigate("Show", { bid: item.id });
              }}
            >
              <View style={s.row}>
                <Text style={s.title}>{item.title}</Text>
                <TouchableOpacity
                  onPress={function () {
                    deleteBlogPost(item.id);
                  }}
                >
                  <Feather style={s.icon} name="trash" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    ),
  };
};

const s = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    paddingVertical: 10,
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});
export default IndexScreen;
