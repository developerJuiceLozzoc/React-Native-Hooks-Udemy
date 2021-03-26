import React from "react"
import {StyleSheet,View, FlatList} from 'react-native'
import data from "../static.json"
import AlbumDetail from "./AlbumDetail"
class AlbumList extends React.Component {

  constructor(){
    super()
    this.state = {
      albums: [],
      isLoading: true
    }
  }
  componentDidMount(){
    const self = this;
    var indexs = {}

    var shuffled = []
    var currIndex
    for(let i=0;i<10;i++){
      do{
        currIndex = Math.floor(Math.random() * data.results.length)
      }
      while(indexs[currIndex])
      indexs[currIndex] = true
    }
    Object.keys(indexs).map(function(key){
      shuffled.push(data.results[key])
    })
    setTimeout(function(){

      self.setState({
        albums: shuffled,
        isLoading: false
      })
    },1500)
  }


  render(){
    return (
      <View style={s.viewStyle}>
        <FlatList
          data={this.state.albums}
          keyExtractor={(album)=> album.collectionId }
          renderItem={function({item}){
            return <AlbumDetail
                        album={item} />
          }} />
      </View>
    )
  }
}

const s = StyleSheet.create({
  textStyle: {
    fontSize: 20,

  }
})


export default AlbumList
