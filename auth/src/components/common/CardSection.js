import React from "react"
import {View, StyleSheet} from "react-native"

function CardSection({children}){
  return (<View style={s.cardSection}>{children}</View>)
}

const s = StyleSheet.create({
  cardSection: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    flexDirection: "row",
    borderColor: "#ddd",
    position: "relative"
  }
})

export default CardSection
