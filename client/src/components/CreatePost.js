import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate(); // useNavigate hook for redirection

  // Handle input change for each field
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'title') setTitle(value);
    if (name === 'description') setDescription(value);
    if (name === 'category') setCategory(value);
  };

  // Handle form submission and save data to the database
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      title,
      description,
      category,
    };

    // Ensure your backend URL is correct here
    const apiUrl = 'http://localhost:3000/post/save'; // Update to match your backend URL

    // Send POST request to save data
    axios.post(apiUrl, data)
      .then((response) => {
        if (response.data.success) {  // Check for success in response
          alert('Post saved successfully');
          // Redirect to the home page after successful save
          navigate('/');
        } else {
          alert('Failed to save post: ' + response.data.message);  // Show error message from response
        }
      })
      .catch((error) => {
        console.error('There was an error saving the post!', error);
        alert('Error saving post');
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-header bg-primary text-white text-center">
              <h3>Create a New Post</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Post Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    value={title}
                    onChange={handleInputChange}
                    placeholder="Enter the title of your post"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    value={description}
                    onChange={handleInputChange}
                    placeholder="Write a description"
                    rows="4"
                    required
                  ></textarea>
                </div>

                <div className="mb-3">
                  <label htmlFor="category" className="form-label">Category</label>
                  <select
                    className="form-select"
                    id="category"
                    name="category"
                    value={category}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select a category</option>
                    <option value="Technology">Technology</option>
                    <option value="Health">Health</option>
                    <option value="Education">Education</option>
                    <option value="Lifestyle">Lifestyle</option>
                  </select>
                </div>

                <div className="text-center">
                  <button type="submit" className="btn btn-primary">Create Post</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
