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
    return (
      <div className="container mt-5 text-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <p>Loading...</p>
      </div>
    ); // Show loading state with spinner
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h3 className="card-title">{post.title}</h3>
            </div>
            <div className="card-body">
              <h5 className="card-title">Description</h5>
              <p className="card-text">{post.description}</p>
              <hr />
              <p><strong>Category:</strong> {post.category}</p>
            </div>
            <div className="card-footer text-right">
              <button className="btn btn-warning">
                <i className="fas fa-edit"></i> Edit
              </button>
              &nbsp;
              <button className="btn btn-danger">
                <i className="fas fa-trash-alt"></i> Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
