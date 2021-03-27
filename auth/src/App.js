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

import {Header,Button} from "./components/common"
import LoginForm from "./components/LoginForm"


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      username: null
    }
  }
  componentDidMount(){

  }
  loggedin(username){
    this.setState({
      username
      })
  }
  renderContent(){
    if(this.state.username){
      return <Button> Log out </Button>
    }else{
      return (<View>
        <Header title="Authentication" />
        <LoginForm  onLogin={this.loggedin}/>
      </View>)
    }
  }

  render(){
    return this.renderContent()
  }
}

export default App
