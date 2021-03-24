import React,{useReducer} from "react"
import createDataContext from "./createDataContext"




function reducer(state,action){
  switch(action.type){
    case "delete_blogpost":
      return state.filter(function(post){
        return post.id !== action.payload
      })
    case "add_blogpost":
      return [...state,{id: Math.floor(Math.random()*99999), title: `Blog post #${state.length + 1}`}]
    default:
      return state
  }
}


const BlogContext = React.createContext()

function addBlogPost(dispatch){
  return ()=>{
    dispatch({
      type: "add_blogpost",
    })
  }

}
function deleteBlogPost(dispatch){
  return (id)=>{
    dispatch({
      type: "delete_blogpost",
      payload: id
    })
  }

}
export const {Context, Provider} = createDataContext(reducer,{addBlogPost,deleteBlogPost},[])
/*
const BlergProvider = function({children}){
  const [blogPosts,dispatch] = useReducer(reducer,[])
  const addBlogPost= () =>{
    dispatch({
      type: "add_blogpost",
      payload: [...blogPosts,{ title: `Blog post #${blogPosts.length + 1}`}]
    })
  }
  return (<BlogContext.Provider value={{data: blogPosts, addBlogPost}}>
    {children}
  </BlogContext.Provider>)

}*/
