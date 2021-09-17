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
    console.log(photos);
    console.log(firstPhoto.title);
    props(firstPhoto);
  })
  .catch(error => {
    console.log(error);
  })

  return (
    <main className="post-grid">
      <Post 
        title="Andromeda Cloud"
        caption="So many wondrous things in space but all I want is a milkshake."
        date="September 17, 2021"
        image="https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        />
    </main>
  );
}

export default PostFeed;