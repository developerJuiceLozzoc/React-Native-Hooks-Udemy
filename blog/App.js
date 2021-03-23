import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import {Provider} from "./src/context/BlogContext"
import IndexScreen from "./src/screens"

const navigator = createStackNavigator(
  {
    Index: IndexScreen
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Blogs",
    },
  }
);


const App = createAppContainer(navigator);

export default () => {
  return (<Provider>
  <App />
  </Provider>)
}
