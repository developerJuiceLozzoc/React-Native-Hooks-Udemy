import React from "react"
import {View,Text,StyleSheet,
   FlatList, TouchableOpacity} from "react-native"
   import {withNavigation} from "react-navigation"

import BusinessThumbnail from "../components/BusinessDetail"

function ResultsList({header,data,navigation}){
  if(data.length == 0) {
    return null
  }
  else
  return(
    <View>
      <Text style={ss.title}>{header}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(result)=> result.id}
        renderItem={function({item}){
          return (
            <TouchableOpacity
              onPress={function(){
                navigation.navigate("DetailView",{id: item.id})
              }}>
              {BusinessThumbnail(item)}
            </TouchableOpacity>)
        }}
        />
    </View>
  )

}

const ss = StyleSheet.create({
  title: {
    fontSize: 18,
    marginLeft: 15
  }
})

export default withNavigation(ResultsList)
