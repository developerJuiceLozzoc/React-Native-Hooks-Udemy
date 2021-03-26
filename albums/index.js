import React from "react"
import {View, Text} from "react-native"
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import Header from "./src/components/Header"
import AlbumList from "./src/components/AlbumList"

const App = function(){
  return (
    <View style={{flex: 1}}>
      <Header title={"Albums!"}/>
      <AlbumList data={[]} />
    </View>
  )
}







AppRegistry.registerComponent(appName, () => App);
