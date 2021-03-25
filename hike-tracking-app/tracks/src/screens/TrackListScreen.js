import React, {useContext} from "react"
import {View,Text,StyleSheet,TouchableOpacity,FlatList} from "react-native"
import {NavigationEvents} from "react-navigation"
import {ListItem} from "react-native-elements"
import {Context} from "../context/trackContext"

function TrackListScreen({navigation}){
  const {state, fetchTracks} = useContext(Context)
  console.log(state);
  return (<View>
    <NavigationEvents
      onWillFocus={fetchTracks} />
    <FlatList
      data={state}
      keyExtractor={(el) => el._id}
      renderItem={function({item}){
        return (
          <TouchableOpacity
            onPress={function(){
              navigation.navigate("Detail",{id: item._id})
            }}>
            <ListItem>
              <ListItem.Content>
                <ListItem.Title>{item.name}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          </TouchableOpacity>
        )
      }} />
  </View>)
}

const s = StyleSheet.create({})



export default TrackListScreen
