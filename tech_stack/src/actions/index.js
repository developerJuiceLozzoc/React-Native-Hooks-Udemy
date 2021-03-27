export const selectLibrary = function(libraryId){
  return {
    type: "expand_row",
    payload: libraryId
  }
}
export const collapseRow = function(){
  return {
    type: "collapse_row"
    }
}
