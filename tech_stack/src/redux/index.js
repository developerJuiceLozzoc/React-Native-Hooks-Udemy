import {combineReducers} from "redux"


import SelectReducer from "./SelectionReducer"
import LibraryReducer from "./LibraryReducer.js"




export default combineReducers({
  libraries: LibraryReducer,
  selectedId: SelectReducer
})
