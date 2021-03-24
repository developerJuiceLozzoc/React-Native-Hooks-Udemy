import React, { useReducer } from "react";
import createDataContext from "./createDataContext";
import jsonserv from "../api/jsonserver.js";

function reducer(state, action) {
  switch (action.type) {
    case "get_blogposts":
      return action.payload;
    case "save_blogpost":
      // var index = state.indexOf(action.payload.id)
      // var filterd = state.filter(function(post){
      //   return post.id !== action.payload.id
      // })
      // filterd.splice(index,0,action.payload)
      // return filterd;
      return state.map(function (blogpost) {
        return blogpost.id === action.payload.id ? action.payload : blogpost;
      });

    case "delete_blogpost":
      return state.filter(function (post) {
        return post.id !== action.payload;
      });
    // case "add_blogpost":
    //   return [
    //     ...state,
    //     { id: Math.floor(Math.random() * 99999), ...action.payload },
    //   ];
    default:
      return state;
  }
}

const BlogContext = React.createContext();

function getBlogPosts(dispatch) {
  return () => {
    jsonserv
      .get("/blogposts")
      .then(function (response) {
        dispatch({
          type: "get_blogposts",
          payload: response.data,
        });
      })
      .catch(function (err) {
        console.log(err);
        dispatch({
          type: "get_blogposts",
          payload: [],
        });
      });
  };
}

function addBlogPost(dispatch) {
  return (blog, callback) => {
    jsonserv
      .post("/blogposts",blog)
      .then(function(response){
        // dispatch({
        //   type: "add_blogpost",
        //   payload: blog,
        // });
        callback();
      })
      .catch(function(err){
        console.log(err);
        callback()
      })
  };
}
function deleteBlogPost(dispatch) {
  return (id) => {
    jsonserv
    .delete(`/blogposts/${id}`)
    .then(function(response){
      dispatch({
        type: "delete_blogpost",
        payload: id,
      });
    })
    .catch(function(err){
      console.log(err);
    })

  };
}

function saveBlogPost(dispatch) {
  return (blog, callback) => {
    jsonserv
    .put(`/blogposts/${blog.id}`,{...blog})
    .then(function(){
      dispatch({
        type: "save_blogpost",
        payload: blog,
      });
      callback();
    })
    .catch(function(err){
      console.log(err);
      callback()
    })

  };
}

export const { Context, Provider } = createDataContext(
  reducer,
  { addBlogPost, deleteBlogPost, saveBlogPost, getBlogPosts },
  []
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
