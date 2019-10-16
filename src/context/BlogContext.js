import React from "react";
import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
        }
      ];
    case 'delete_blogpost':
      return state.filter((blogPost) => blogPost.id !== action.payload);
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: 'add_blogpost', payload: { title, content } });
    callback();
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: 'delete_blogpost', payload: id });
  }
};

const initialState = {
  id: "1",
  title: "Vroom",
  content: "Inthis second post of the series I’ll write about integrating a simple React UI application with the AWS Cognito user pool we configured in the first post. I’ll show how to use the built in sign-in and sign-up UI content provided by Cognito and how to combine them with a React UI. We’ll also explore the customisation options for this built in UI content and show how to add our own logo and branding to them."
};
export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost, deleteBlogPost }, [initialState]);
