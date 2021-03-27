import React from 'react';
import {View, FlatList} from "react-native"
import {connect} from "react-redux"
import {Header} from "./components/common"
import ListItem from "./ListItem"

class LibraryList extends React.Component {


  render(){
    return (
      <FlatList
        data={this.props.library}
        keyExtractor={(el)=> `${el.id}`}
        renderItem={({item})=> (<ListItem data={item}/>)}
        />
      )
  }

}

function mapStateToProps(state){
  return {
    library: state.libraries
  }
}


export default connect(mapStateToProps,null)(LibraryList)
