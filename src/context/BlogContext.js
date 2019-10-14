import React, { useState } from "react";

const BlogContext = React.createContext();

export const BlogProvider = ({children}) => {
  const [blogPosts, setBlogPosts] = useState([]);

  const addBlogPosts = () => {
    setBlogPosts([...blogPosts, { title: `The Neverending Story #${blogPosts.length + 1}` }]);
  };

  return <BlogContext.Provider value={{ data: blogPosts, addBlogPosts }}>
    {children}
  </BlogContext.Provider>
}

export default BlogContext;
