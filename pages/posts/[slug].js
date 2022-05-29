import React from 'react';

const Slug = ({post}) => {
    return (
        <div>
            the slug {post}
        </div>
    );
};

export default Slug;
export async function getStaticPaths() {
    return{
        paths: [
            {params: {id: '1'}}
        ],
        fallback:true
    }
}
export async function getStaticProps(context) {
    console.log(context)
    return {
        props: {
            post: 'hello'
        }
    }
}