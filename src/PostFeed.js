import React, { useState, useEffect } from 'react';
import './PostFeed.css';
import Post from './Post';
import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;

const PostFeed = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  axios.get(`https://api.nasa.gov/planetary/apod`, {
    params: {
      count: 5,
      api_key: apiKey,
    }
  })
  .then(response => {
    setData(response.data);
  })
  .catch(error => {
    console.error('Error fetching posts: ', error);
    setError(error);
  })
  .finally(() => {
    setLoading(false);
  })
}, []);

if (loading) return 'Loading...';
if (error) return 'Error!';

  const posts = data;
  console.log(posts);

  return (
    <main className="post-grid">
      {posts.map((post) => (
        <Post {...post} />
      ))}
    </main>
  );
}

export default PostFeed;