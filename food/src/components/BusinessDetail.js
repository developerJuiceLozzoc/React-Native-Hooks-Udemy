import React from "react"
import {View,Image,Text,StyleSheet} from "react-native"


function BusinessDetail({image_url,name,rating,review_count}){
  return (
    <View style={s.container}>
      <Image style={s.image} source={{ uri: image_url }} />
      <Text style={s.name}>{name}</Text>
      <Text >
        {rating} Stars, {review_count} Reviews
      </Text>
    </View>
  )
}

const s = StyleSheet.create({
  image: {
    width: 250,
    height: 125,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold"
  },
  container:{
    marginLeft: 15
  }

})
export default BusinessDetail
