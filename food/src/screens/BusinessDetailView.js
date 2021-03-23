import React, {useState,useEffect} from "react"
import {View,StyleSheet,Text,Image,FlatList} from "react-native"

import yelp from "../api/yelp"

function BusinessDetailView({navigation}){
  const id = navigation.getParam('id')
  const [result,setResult] = useState(null)
  const getDetails = (id) => {
    yelp.get(`/${id}`)
    .then(function(response){
      setResult(response.data)
    })
    .catch(function(error){

    })
  }
  useEffect(()=>{
    getDetails(id)
  },[])

  if(!result){
    return null
  }
  else
    return (<>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo)=> photo}
        renderItem={function({item}){
          return <Image style={s.image} source={{uri: item}} />
        }} />
  </>)
}

const s = StyleSheet.create({
  image: {
    height: 200,
    width: 300
  }
})
export default BusinessDetailView
