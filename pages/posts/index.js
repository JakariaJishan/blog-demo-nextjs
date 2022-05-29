import Link from "next/link";
import React from "react";
import { getAllPosts } from "../../lib/api";

const Posts = ({ posts }) => {
  return (
    <div>
      <h1>the post page</h1>
      {posts.map((post, index) => {
        return (
          <div key={index}>
            <h1>{post.title}</h1>
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
  return {
    props: {
        posts: getAllPosts()
    },
  };
}
