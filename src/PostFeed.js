import React from 'react';
import './PostFeed.css';
import Post from './Post';
import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;

const PostFeed = (props) => {
  axios.get(`https://api.nasa.gov/planetary/apod`, {
    params: {
      count: 5,
      api_key: apiKey,
    }
  })
  .then(response => {
    const photos = response.data;
    const firstPhoto = photos[0];
    console.log(firstPhoto.title);
    props(firstPhoto);
  })
  .catch(error => {
    console.log(error);
  })

  return (
    <main className="post-grid">
      <Post firstPhoto/>
    </main>
  );
}

export default PostFeed;