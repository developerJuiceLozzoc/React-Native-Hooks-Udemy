import createDataContext from "./createDataContext";
import api from "../api/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate } from "../navigationRef";

function trackReducer(state, action) {
  switch (action.type) {
    case "fetch_tracks":
      return action.payload;
    default:
      return state;
  }
}
function fetchTracks(dispatch) {
  return () => {
    api
    .get("/tracks")
    .then(function(response){
      dispatch({
        type: "fetch_tracks",
        payload: response.data
      })
    })
    .catch(function(err){
      console.log(err);
      dispatch({
        type: "fetch_tracks",
        payload: []
      })
    })
  };
}

function createTrack(dispatch) {
  return (name,locations,callback) => {
    api
    .post('/tracks',{name,locations})
    .then(function(response){
      callback(true)
    })
    .catch(function(err){
      console.log(err);
      callback(false)
    })
  };
}


export const { Provider, Context } = createDataContext(
  trackReducer,
  { createTrack,fetchTracks},
  []
);
