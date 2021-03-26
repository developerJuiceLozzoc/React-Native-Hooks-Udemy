import React from "react"
import {StyleSheet,View,Text, Image,Linking} from 'react-native'

import Card from "./Card"
import CardSection from "./CardSection"
import Button from "./Button"
function AlbumDetail(props){
  const {collectionName,artworkUrl100,artworkUrl60,
    collectionPrice,artistName,artistViewUrl} = props.album
  return (
    <Card>
      <CardSection>
        <View style={s.thumbnailContainer}>
          <Image style={s.imageStyle} source={{uri: artworkUrl60}} />
        </View>
        <View style={s.headerContent}>
          <Text style={s.headerText}> {collectionName} </Text>
          <Text > {artistName} </Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={s.bigImageStyle} source={{uri: artworkUrl100}} />
      </CardSection>
      {artistViewUrl && <CardSection>
        <Button
          doStuff={function(){
            Linking.openURL(artistViewUrl)
          }} >
          View Artist
          </Button>
      </CardSection>}

    </Card>
  )
}

const s = StyleSheet.create({
  headerContent: {
    flexDirection: "column",
    justifyContent: "space-around"
  },
  headerText: {
    fontSize: 18
  },
  imageStyle: {
    height: 50,
    width: 50,
  },
  bigImageStyle: {
    height: 300,
    flex: 1,
    width: null
  },
  thumbnailContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10
  },


})


export default AlbumDetail
