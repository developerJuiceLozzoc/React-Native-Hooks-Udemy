import 'react-native-gesture-handler';
import React, {Component} from "react"
import {View, Text, SafeAreaView} from "react-native"
import {Provider} from "react-redux"
import {createStore,applyMiddleware} from "redux"
import ReduxThunk from "redux-thunk"
import { NavigationContainer } from '@react-navigation/native';

import reducers from "./reducers"
import Router from "./Router"

class App extends Component {

  render(){
    const store = createStore(reducers,{},applyMiddleware(ReduxThunk))
    return (
      <NavigationContainer>
      <Provider
        store={store} >

      </Provider>
      </NavigationContainer>
    )
  }
}



export default App
