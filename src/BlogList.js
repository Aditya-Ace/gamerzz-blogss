import React from 'react';

export default function BlogList({ blogs }) {
  return (
    <div className='blog-list'>
      {blogs.map((blog) => {
        return (
          <div className='blog-preview' key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </div>
        );
      })}
    </div>
  );
}
