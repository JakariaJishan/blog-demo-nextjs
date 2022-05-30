import Link from "next/link";
import React from "react";
import { getAllPosts, getAuthorBySlug } from "../../lib/api";
const Posts = ({ posts }) => {
  return (
    <div>
      <h1>the post page</h1>
      {posts.map((post, index) => {
        return (
          <div key={index}>
            <h1>{post.title}</h1>
            <h2>{post.author.name}</h2>
            <p>{post.excerpt}</p>
            <Link href={post.permalink}>
                read more..
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;

export async function getStaticProps() {
  const allPosts = getAllPosts();
  const posts = allPosts.map((post) => ({
    ...post,
    author: getAuthorBySlug(post.author)
  }))
  return {
    props: {
        posts: posts
    },
  };
}
