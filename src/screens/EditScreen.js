import React, { useContext } from "react";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { state, updateBlogPost } = useContext(Context);

  const blogPost = state.find(
    (blogPost) => blogPost.id === id
  );

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        updateBlogPost(id, title, content, () => {
          navigation.navigate('Index');
        })
      }}
    />
  );
};

export default EditScreen;
