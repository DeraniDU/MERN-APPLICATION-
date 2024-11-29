import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Import useParams hook

function PostDetails() {
  const { id } = useParams(); // Get the id from the URL parameters
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Fetch the post details based on the id
    axios
      .get(`/posts/${id}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]); // Dependency on `id`, so it re-fetches when `id` changes

  if (!post) {
    return <div>Loading...</div>; // Handle loading state
  }

  return (
    <div className="container mt-5">
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <p><strong>Category:</strong> {post.category}</p>
    </div>
  );
}

export default PostDetails;
