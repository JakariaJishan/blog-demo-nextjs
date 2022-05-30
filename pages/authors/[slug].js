import React from 'react';
import { getAllAuthor, getAllPosts, getAuthorBySlug } from '../../lib/api';

const Author = ({author}) => {
    return (
        <div>
            <h2>{author.name}</h2>
            posts: {author.posts.length}
        </div>
    );
};

export default Author;

export async function getStaticProps({params}) {
    const author = getAuthorBySlug(params.slug)
    const posts = getAllPosts().filter(post => post.author == author.slug)
    return {
        props: {
            author: {
                ...author,
                posts
            }
        }
    }
}

export async function getStaticPaths() {
    return{
        fallback:false,
        paths: getAllAuthor().map(author => ({
            params: {
                slug: author.slug
            }
        }))
    }
}