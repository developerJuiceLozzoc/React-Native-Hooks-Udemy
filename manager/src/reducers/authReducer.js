import {
  EMAIL_CHANGED,
  PASS_CHANGED,USER_LOGGEDIN,LOGIN_ERR,START_LOGIN
} from "../actions/types";


const initialState = {
  email: "",
  password: "",
  isLoading: false,
  error: null,
  isLoggedIn: null
}


export default function(state = initialState,action){
  console.log(action);
  switch(action.type){
    case EMAIL_CHANGED:
      return {...state,email: action.payload}
    case PASS_CHANGED:
      return {...state,password: action.payload}
    case START_LOGIN:
      return {...state,isLoading: true}
    case LOGIN_ERR:
      return {...state,error: action.payload, isLoading: false}
    case USER_LOGGEDIN:
      return {...state,...initialState,isLoggedIn: action.payload}
    default:
      return state
  }
}
