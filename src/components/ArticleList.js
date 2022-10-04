//import { getByPlaceholderText } from '@testing-library/react';
import React from 'react'
// import blogData from '../data/blog';
import Article from './Article';

export default function ArticleList({posts}) {
    const postItems = posts.map((post) => {
        return (
             <Article key={post.id} title={post.title} date={post.date} preview={post.preview}/>)
        //<Article key={post.id} title={post.title} date={post.date} preview={post.preview}/>
      });

  return (
    <main>
      {postItems}
    </main>
  )
}