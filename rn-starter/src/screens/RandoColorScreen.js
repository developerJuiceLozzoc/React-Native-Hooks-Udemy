import React, {useState} from "react";
import { View,Button, Text, StyleSheet, FlatList } from "react-native";

function ListScreen() {
  const [colors,setColors] = useState([])
  return (
    <View>
      <Button
        title="Add a Color"
        onPress={()=>{
          setColors([...colors,genColors()])
        }}
        />

      <FlatList
        data={colors}
        keyExtractor={(el) => el}
        renderItem ={({ item }) => {
          return (
            <View contentContainerStyle={{flexDirection: "row"}}>
                <View style={{height: 100, width: 100, backgroundColor: item}} />
                <Text> {item} </Text>
            </View>
            )
        }}
      />
    </View>
  );
}

function genColors(){
  let el = []
  for(let i = 0; i< 3; i++){
    el.push(Math.floor(Math.random()*255))
  }
  return `rgb(${el.join(',')})`
}

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
