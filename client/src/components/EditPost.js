import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory

function EditPost() {
  const { id } = useParams(); // Get the post ID from the URL
  const navigate = useNavigate(); // Initialize the navigate function
  const [post, setPost] = useState({
    title: '',
    description: '',
    category: ''
  });

  // Fetch post data when the component mounts
  useEffect(() => {
    axios
      .get(`/posts/${id}`)
      .then((response) => {
        setPost(response.data); // Pre-fill form with the post data
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  // Handle form input changes
  const handleChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send PUT request to update the post
    axios
      .put(`/posts/${id}`, post)
      .then((response) => {
        alert(response.data.message); // Show success message
        navigate('/'); // Navigate to the home page
      })
      .catch((error) => {
        console.log(error);
        alert('Error updating post');
      });
  };

  return (
    <div className="container mt-5">
      <h1>Edit Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={post.title}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={post.description}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            className="form-control"
            id="category"
            name="category"
            value={post.category}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Update Post
        </button>
      </form>
    </div>
  );
}

export default EditPost;
