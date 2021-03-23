import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import SearchScreen from "./src/screens/SearchScreen"
import BusinessDetailView from "./src/screens/BusinessDetailView"
const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    DetailView: BusinessDetailView,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Search Business",
    },
  }
);

export default createAppContainer(navigator);
