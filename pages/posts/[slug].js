import Link from "next/link";
import React from "react";
import { getAllPosts, getAuthorBySlug, getPostBySlug } from "../../lib/api";
const Slug = ({ post }) => {
  return (
    <div>
      <Link href={`${post.author.parmalink}`}>
        <a>
          <h1>{post.author.name}</h1>
        </a>
      </Link>

      <div dangerouslySetInnerHTML={{ __html: post.body }} />
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
  const post = getPostBySlug(params.slug);
  const author = getAuthorBySlug(post.author);
  // console.log(post,author)
  return {
    props: {
      post: {
        ...post,
        author,
      },
    },
  };
}
