import React from 'react';
import { StyleSheet, TextInput, View, } from 'react-native';
import {Feather} from "@expo/vector-icons"

function SearchBar({onTermChange,term,onTermSubmit}){
  return (<View style={styles.background}>
      <Feather name="search"
        style={styles.iconStyle}/>
      <TextInput
        value={term}
        onChangeText={onTermChange}
        style={styles.inputStyle}
        placeholder="Search"
        autoCorrect={false}
        autoCapitalize="none"
        onEndEditing={onTermSubmit}/>
  </View>)
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#f0eeee",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
  },
  inputStyle: {
    flex: 1,
    left: 10,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 36,
    alignSelf: "center"
  }
})

export default SearchBar
