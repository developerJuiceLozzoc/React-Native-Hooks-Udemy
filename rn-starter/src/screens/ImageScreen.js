import React,{Component} from "react"
import {Text, StyleSheet,View} from "react-native"
import ImageDetail from "../Components/ImageDetail"



function ImageScreen(){
  const details = [
    {
      imgurl: "https://www.bing.com/th?id=AMMS_021c48bc2d2b77cac03f11d213f32782&w=110&h=110&c=7&rs=1&qlt=80&cdv=1&pid=16.1",
      title: "Beach",
    },
    {
      imgurl: "https://www.gadgetshowprizes.co.uk/wp-content/uploads/2014/07/Edinburgh-Castle.jpg",
      title: "Castle",
    },
    {

      imgurl: "https://weneedfun.com/wp-content/uploads/2016/12/Forest-Path-Pictures-16-1024x765.jpg",
      title: "Forest",
    }
  ]
  return (<View>
      <ImageDetail
        title={details[0].title}
        imgurl={details[0].imgurl}/>
      <ImageDetail
        title={details[1].title}
        imgurl={details[1].imgurl} />
      <ImageDetail
        title={details[2].title}
        imgurl={details[2].imgurl} />
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  }
})

export default ImageScreen
