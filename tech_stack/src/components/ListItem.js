import React from "react"
import {CardSection,} from "./common"
import {Text,View,
  TouchableWithoutFeedback,
  LayoutAnimation} from "react-native"
import {connect} from "react-redux"

import {selectLibrary,collapseRow} from "../actions"

class ListItem extends React.Component {
  componentDidUpdate(){
    LayoutAnimation.spring()
  }
  render(){
    const {data,expand_row,isExpanded} = this.props
    return (
      <TouchableWithoutFeedback
        onPress={function(){
          expand_row(data.id)
        }}>
        <View>
          <CardSection>
            <Text>{data.title}</Text>
          </CardSection>
          {isExpanded && (
            <CardSection>
            <Text sytle={{flex: 1, flexWrap: 'wrap'}}>{data.description}</Text>
            </CardSection>
          )}

        </View>
      </TouchableWithoutFeedback>
    )
  }

}


function mapDispatchToProps(dispatch){
  return {
    expand_row: function(id){
      dispatch(selectLibrary(id))
    },
    collapse_row: function(){
      dispatch(collapseRow())
    }
  }

}
function mapStateToProps(state,ownProps){
  const isExpanded = state.selectedId == ownProps.data.id
  return {
    isExpanded
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListItem)
