import React from "react";
import { getAllPosts, getPostBySlug } from "../../lib/api";

const Slug = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.body }}></div>
    </div>
  );
};

export default Slug;

export async function getStaticPaths() {
  return {
    paths: getAllPosts().map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: true,
  };
}
export async function getStaticProps({ params }) {
  return {
    props: {
      post: getPostBySlug(params.slug),
    },
  };
}
