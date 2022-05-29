import React from 'react';
import { getAllAuthor, getAuthorBySlug } from '../../lib/api';

const Author = ({author}) => {
    return (
        <div>
            the author- {author.name}
        </div>
    );
};

export default Author;

export async function getStaticProps({params}) {
    return {
        props: {
            author: getAuthorBySlug(params.slug)
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