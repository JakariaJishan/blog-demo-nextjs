import React from "react";
import { getAllPosts } from "../../lib/api";

const Posts = ({ posts }) => {
  console.log(posts);
  return (
    <div>
      <h1>the post page</h1>
      {posts.map((post, index) => {
          console.log(post)
        return (
          <div key={index}>
            <h1>{post.title}</h1>
            <p>{post.excerpt}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;

export async function getStaticProps() {
  
  return {
    props: {
        posts: getAllPosts()
    },
  };
}
