import React, { useReducer } from "react";
import createDataContext from "./createDataContext";

function reducer(state, action) {
  switch (action.type) {
    case "save_blogpost":
      // var index = state.indexOf(action.payload.id)
      // var filterd = state.filter(function(post){
      //   return post.id !== action.payload.id
      // })
      // filterd.splice(index,0,action.payload)
      // return filterd;
      return state.map(function(blogpost){
        return blogpost.id === action.payload.id ? action.payload : blogpost;
      })

    case "delete_blogpost":
      return state.filter(function (post) {
        return post.id !== action.payload;
      });
    case "add_blogpost":
      return [
        ...state,
        { id: Math.floor(Math.random() * 99999), ...action.payload },
      ];
    default:
      return state;
  }
}

const BlogContext = React.createContext();

function addBlogPost(dispatch) {
  return (blog, callback) => {
    dispatch({
      type: "add_blogpost",
      payload: blog,
    });
    callback();
  };
}
function deleteBlogPost(dispatch) {
  return (id) => {
    dispatch({
      type: "delete_blogpost",
      payload: id,
    });
  };
}

function saveBlogPost(dispatch) {
  return (blog, callback) => {
    dispatch({
      type: "save_blogpost",
      payload: blog,
    });
    callback();
  };
}

var initialState = [
  {
    title: "Dummy blogpost #2",
    content:
      "This blog post is meant so i dont constantly have to create a stupid blog post on my phone for testing",
  },
];

export const { Context, Provider } = createDataContext(
  reducer,
  { addBlogPost, deleteBlogPost, saveBlogPost },
  initialState
);
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
