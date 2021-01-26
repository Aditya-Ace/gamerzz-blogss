/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
        .then((res) => {
          if (!res.ok) {
            throw Error('We could not fetch the data right now.');
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setBlogs(data);
          setIsLoading(false);
          setError(null);
        })
        .catch((error) => {
          setError(error.message);
          setIsLoading(false);
        });
    }, 1000);
  }, []);

  return (
    <div className='home'>
      {error && <div>{error}</div>}
      {isLoading ? 'Loading ... ' : blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
