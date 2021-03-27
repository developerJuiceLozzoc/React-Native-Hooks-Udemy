/**
 * action: object ottell the reducer how the state is chagned
 reducer, a function that returns data
 state, data
 store, object that holds the state, or multiple states.
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
