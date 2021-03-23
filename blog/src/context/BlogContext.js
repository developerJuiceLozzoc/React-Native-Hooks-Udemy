import React,{useReducer} from "react"
import createDataContext from "./createDataContext"




function reducer(state,action){
  switch(action.type){
    case "add_blogpost":
      return [...state,{ title: `Blog post #${state.length + 1}`}]
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

}


export const {Context, Provider} = createDataContext(reducer,{addBlogPost},[])
