export default function(state = null,action){
  switch(action.type){
    case "expand_row":
      return action.payload
    case "collapse_row":
      return null
    default:
      return state
  }
}
