import Link from 'next/link';
import React from "react";
import { getAllAuthor } from "../../lib/api";
const Authors = ({ authors }) => {
  return (
    <div>
      {authors.map((author) => (
        <div key={author.slug}>
            <h2>
                <Link href={author.parmalink} >
                    <a> {author.name}</a>
                </Link>
                <Link href={author.parmalink} >
                    <a> go to profile 👉</a>
                </Link>
                <hr />
            </h2>
        </div>
      ))}
    </div>
  );
};

export default Authors;

export async function getStaticProps() {
  return {
    props: {
      authors: getAllAuthor(),
    },
  };
}
