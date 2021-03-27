import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {connect} from "react-redux"

import LoginForm from "./components/LoginForm"



class RouterComponent extends React.Component {

  render(){
    if(this.props.isLoggedIn){
      return null
    }
    else{
      return (
        <LoginForm />
      )
    }
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
  }

}

function mapStateToProps(state){
  return {
    isLoggedIn: state.auth.isLoggedIn
  }
}


export default connect(mapStateToProps,null)(RouterComponent)
