/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Header} from "./components/common"
import LoginForm from "./components/LoginForm"


class App extends React.Component {
  componentDidMount(){

  }
  render(){
    return (
      <View>
        <Header title="Authentication" />
        <LoginForm />
      </View>
      )
  }
}

export default App
