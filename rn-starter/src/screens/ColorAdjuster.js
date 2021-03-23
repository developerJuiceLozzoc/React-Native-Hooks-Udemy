import React,{useReducer} from "react"
import {Text,Button, StyleSheet,View} from "react-native"


function reducer(state,action){
  switch(action.type){
    case "random":
      return {
        "red": Math.floor(Math.random()*255),
        "green": Math.floor(Math.random()*255),
        "blue": Math.floor(Math.random()*255),
      }
    case "specific":
      let nextState = state
      if(state[action.color] + action.payload >= 0 && state[action.color] + action.payload <= 255){
        /*
          nextState[action.color] = state[action.color] + action.payload
          return nextState

        */
        switch(action.color){
          case "red":
            return {  ...state, "red": state[action.color] + action.payload}
          case "blue":
            return {  ...state, "blue": state[action.color] + action.payload}
          case "green":
            return {  ...state, "green": state[action.color] + action.payload}
        }

      }
    default:
      return state
  }
}


function SquareScreen(){
  const [state,dispatch] = useReducer(reducer,{
    "red": 0,
    "green": 0,
    "blue": 0,
  })
  // const [color, setColor] = useState(genColor)

  /*
  `rgb(${red},${blue},${green)`
  rgb(`${color.join(",")}`)
  */

  return (
    <View>
      <View contentContainerStyle={{flexDirection: "row"}}>
          <View style={{height: 100, width: 100, backgroundColor: `rgb(${state["red"]},${state["green"]},${state["blue"]})`}} />
          {/* <Text> {`rgb(${color.join(",")})`} </Text> */}
      </View>
      <Button
        onPress={()=>{
          dispatch({
            type: "random"
          })
        }}
        title="Generate new Color"
        />
      <ColorCounter name="red"
        onChange={(value) => {
          dispatch({
            type: "specific",
            color: "red",
            payload: value
          })
        }}
        />
      <ColorCounter name="blue"
        onChange={(value) => {
          dispatch({
            type: "specific",
            color: "blue",
            payload: value
          })

        }}
        />
      <ColorCounter name="green"
        onChange={(value) => {
          dispatch({
            type: "specific",
            color: "green",
            payload: value
          })

        }}
        />


    </View>
  )
}

function ColorCounter({name,onChange}){
  return (
    <View>
      <Text>{name}</Text>
      <Button
        title="Increment"
        onPress={() => {
          onChange(25)
        }}
        />
      <Button
        title="Decrement"
        onPress={() => {
          onChange(-25)
        }}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  }
})


export default SquareScreen
