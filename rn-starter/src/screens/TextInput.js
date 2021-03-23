import React, {useState} from "react"
import {Text, StyleSheet,View, TextInput} from "react-native"


function TextInputScreen(){
  const [mtext,setText] = useState("hehehaha")
  return (<View>
    <Text> Enter Password </Text>
    <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={mtext}
        onChangeText={function(text){
          setText(text)
        }}
      />
    { mtext.length < 5  && <Text> Error with Password </Text> }
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1
  }
})

export default TextInputScreen
