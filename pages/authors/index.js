import Link from "next/link";
import React from "react";
import { getAllAuthor, getAllPosts } from "../../lib/api";
const Authors = ({ authors }) => {
  console.log(authors.allauthor);
  return (
    <div>
      {authors.allauthor.map((author) => (
        <div key={author.slug}>
            <h2>
                <Link href={author.parmalink} >
                    <a> {author.name}</a>
                </Link>
                <Link href={author.parmalink} >
                    <a> go to profile 👉</a>
                </Link>
                {author.posts.length }
                <hr />
            </h2>
        </div>
      ))}
    </div>
  );
};

export default Authors;

export async function getStaticProps() {
  const allPosts = getAllAuthor();
  const allauthor = allPosts.map((author) => {
    
   const posts =   getAllPosts().filter((post) => post.author === author.slug);
   return {
     ...author,
     posts
   }
   
  })
  return {
    props: {
      authors: {
        allauthor
      },
    },
  };
}
