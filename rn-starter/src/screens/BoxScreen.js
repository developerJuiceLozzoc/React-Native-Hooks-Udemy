import React,{Component} from "react"
import {Text, StyleSheet,View} from "react-native"
import ImageDetail from "../Components/ImageDetail"


/*
solutin 1, margin top,
solution 2: just top
solution3 change parent heightm and use flex end

*/


function BoxScreen(){
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
  // return (<View style={styles.flex}>
  //     <ImageDetail
  //       title={details[0].title}
  //       imgurl={details[0].imgurl}/>
  //     <ImageDetail
  //       title={details[1].title}
  //       imgurl={details[1].imgurl} />
  //     <ImageDetail
  //       title={details[2].title}
  //       imgurl={details[2].imgurl} />
  //   </View>
  // )
  return (
    <View style={styles.flex_excer}>
    <View style={styles.basic} />
    <View style={styles.off} />
    <View style={styles.basic} />
    </View>
  )
}
/*
putting flex: 1 in a childs styles makes that child act as a spacer taking as much
space as it can.,
 if one has flex 1, and another haws flex 2, there would be an aspect ratio b
*/
const styles = StyleSheet.create({
  textStyle: {
    borderWidth: 1,
    borderColor: "purple"
  },
  flex: {

    height: 200,
    // justifyContent: "space-between",
  },
  flex_excer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  basic: {
    borderWidth: 1,
    height: 100,
    width: 100
  },
  off: {
    top: 50,
    borderWidth: 1,
    height: 100,
    width: 100
  }

})

export default BoxScreen
