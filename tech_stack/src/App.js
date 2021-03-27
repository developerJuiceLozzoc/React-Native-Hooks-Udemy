import React from 'react';
import {View} from "react-native"
import {Provider} from "react-redux"
import {createStore } from "redux"

import RootReducer from "./redux"
import {Header} from "./components/common"
import LibrayList from "./components/LibraryList"
const store = createStore(RootReducer)

function App(){
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <Header title="Tech Stack" />
        <LibrayList />
      </View>
    </Provider>
  )
}

export default App;
