import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';
import {FontAwesome} from "@expo/vector-icons"

import AccountScreen from "./src/screens/AccountScreen"
import SigninScreen from "./src/screens/SigninScreen"
import SignupScreen from "./src/screens/SignupScreen"
import TrackCreateScreen from "./src/screens/TrackCreateScreen"
import TrackDetailScreen from "./src/screens/TrackDetailScreen"
import TrackListScreen from "./src/screens/TrackListScreen"
import ResolveAuth from "./src/screens/ResolveAuthScreen"
import {Provider as AuthProvider} from "./src/context/authContext"
import {Provider as LocationProvider} from "./src/context/locationContext"
import {Provider as TrackProvider} from "./src/context/trackContext"

import {setNavigator} from "./src/navigationRef"

const loginNavigator = createStackNavigator(
  {
    Signin: SigninScreen,
    Signup: SignupScreen,
  },
  {
    initialRouteName: "Signin",
    defaultNavigationOptions: {
      title: "Login",
    },
  }
);
const ListNavigator = createStackNavigator(
  {
    List: TrackListScreen,
    Detail: TrackDetailScreen,
  },
  {
    initialRouteName: "List",
    defaultNavigationOptions: {
      title: "My Tracks",
    },
  }
);
ListNavigator.navigationOptions = {
  title: "List My Tracks",
  tabBarIcon: <FontAwesome name="th-list" size={20} />
}

const tabs = createBottomTabNavigator({
  Create: { screen: TrackCreateScreen},
  List: { screen: ListNavigator},
  Account: { screen: AccountScreen },
})

/*

const Tab = createBottomTabNavigator();

function tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Create" component={TrackCreateScreen} />
      <Tab.Screen name="List" component={ListNavigator} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}
*/


const MySwitch = createAnimatedSwitchNavigator(
  {
    Resolve: ResolveAuth,
    LoginFlow: loginNavigator,
    MainFlow: tabs
  },
  {}
);

const App = createAppContainer(MySwitch)
export default () => {
  return (
    <TrackProvider>
    <LocationProvider>
    <AuthProvider>
     <App ref={(navigator)=> { setNavigator(navigator) } }/>
    </AuthProvider>
    </LocationProvider>
    </TrackProvider>
  )
}
