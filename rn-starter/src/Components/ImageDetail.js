import React,{Component} from "react"
import {Text, StyleSheet,View, Image} from "react-native"




function ImageDetail({imgurl,title}){
  return (<View style={styles.viewStyle}>
    <Image
        style={{width: 100, height: 100,resizeMode : 'stretch' }}
        source={{uri: imgurl}} />
    <Text style={styles.textStyle}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
    borderWidth: 3,
    borderColor: "purple"
  },
    viewStyle: {

      alignItems: "flex-end",
      flexDirection: "row",
      borderWidth: 1,
      borderColor: "black",
      // left: 20
    },
})

export default ImageDetail
