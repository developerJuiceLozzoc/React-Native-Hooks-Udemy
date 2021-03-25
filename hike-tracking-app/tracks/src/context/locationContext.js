import createDataContext from "./createDataContext";
import api from "../api/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate } from "../navigationRef";

function locationReducer(state, action) {
  switch (action.type) {
    case "set_current_location":
      return {...state,currentLocation: action.payload}
    case "add_location":
      return { ...state, locations: [...state.locations,action.payload]};
    case "start_recording":
      return { ...state, recording: true };
    case "stop_recording":
      return { ...state, recording: false };
    case "reset":
      return {
        ...state, recording: false, locations: [],trackName: ""
      }
    case "change_name":
      return {
        ...state,
        trackName:action.payload
      }
    default:
      return state;
  }
}
function startRecording(dispatch) {
  return () => {
    dispatch({ type: "start_recording" });
  };
}
function resetTracker(dispatch){
  return function(){
    dispatch({type: "reset"})
  }
}

function stopRecording(dispatch) {
  return () => {
    dispatch({ type: "stop_recording" });
  };
}

function changeTrackName(dispatch){
  return function(name){
    dispatch({
      type: "change_name",
      payload: name
    })
  }
}

function addLocation(dispatch) {
  return (location,recording) => {
    dispatch({
      type: "set_current_location",
      payload: location,
    });
    if(recording){
      dispatch({
        type:"add_location",
        payload: location
      })
    }
  };
}

export const { Provider, Context } = createDataContext(
  locationReducer,
  { addLocation, startRecording,
    stopRecording,changeTrackName,
  resetTracker },
  { trackName: "", recording: false, locations: [], currentLocation: null }
);
