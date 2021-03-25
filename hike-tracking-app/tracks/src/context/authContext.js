import createDataContext from "./createDataContext"
import api from "../api/axios"
import AsyncStorage from "@react-native-async-storage/async-storage"
import {navigate} from "../navigationRef"

function authReducer(state,action){
  switch(action.type){
    case "error":
      return {...state,errorMessage: action.payload}
    case "sign_in":
      return { errorMessage: "", isSignedIn: action.payload}
    case "sign_out":
      return { errorMessage: "", isSignedIn: ""}
    case "sign_up":
      return state
    case "clear_err":
      return {...state,errorMessage: ""}
    default:
      return state
  }
}
const clearErrorMessage = (dispatch) => () => {
  dispatch({type:"clear_err"})
}

function signup(dispatch){
  return (account)=>{
      api.post("/signup", account)
      .then(async function(response){
        await AsyncStorage.setItem("token",response.data.token)
        dispatch({
          type: "sign_in",
          payload: response.data.token
        })
        navigate("List")
      })
      .catch(function(err){
        dispatch({
          type: "error",
          payload: "Email already in use"
        })
      })
  }
}

function tryLocalSignin(dispatch){
  return async ()=>{
    try{
      let token = await AsyncStorage.getItem("token")
      if(token.length > 0){
        dispatch({type: "sign_in", payload: token})
        navigate("List")
      }
    }
    catch(e){
      console.log(e);
    }
  }
}

function signin(dispatch){
  return (account)=>{
    api.post("/signin", account)
    .then(async function(response){
      await AsyncStorage.setItem("token",response.data.token)
      dispatch({
        type: "sign_in",
        payload: response.data.token
      })
      navigate("List")
    })
    .catch(function(err){
      dispatch({
        type: "error",
        payload: "Error signing in"
      })
    })
  }
}
function signout(dispatch){
  return ()=>{
    dispatch({
      type: "sign_out"
    })
  }
}




export const { Provider, Context} = createDataContext(
  authReducer,
  {signout,signin,signup,clearErrorMessage,tryLocalSignin},
  {isSignedIn: false,errorMessage: ""}
)
