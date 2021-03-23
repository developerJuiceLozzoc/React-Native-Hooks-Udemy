import React,{useReducer} from "react"
import {Text,Button, StyleSheet,View} from "react-native"

function reducer(state,action){
  if(action.type == "increment"){
    return {
      count: state.count + 1
    }
  }
  else{
    return {
      count: state.count - 1
    }
  }
}

function CounterScreen(){
  const [state,dispatch] = useReducer(reducer,{
    count: 0
  })
  return (
    <View>
      <Text style={styles.textStyle}>{state.count}</Text>
      <Button
        onPress={()=>{
          dispatch({
            type: "increment"
          })
      }}
        title="Increment"
        />
      <Button
          onPress={()=>{
            dispatch({
              type: "decrement"
            })
        }}
        title="Decrement"
        />
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  }
})


export default CounterScreen
