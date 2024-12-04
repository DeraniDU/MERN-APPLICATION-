import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link

function Home() {
  const [posts, setPosts] = useState([]); // State to store posts

  // Fetch posts when the component mounts
  useEffect(() => {
    retrievePosts();
  }, []);

  // Function to fetch posts
  const retrievePosts = () => {
    axios
      .get('/posts') // Make GET request to fetch posts from the server
      .then((response) => {
        setPosts(response.data); // Set posts in the state
      })
      .catch((error) => {
        console.log(error); // Handle any errors during the API call
      });
  };

  // Function to delete a post
  const deletePost = (id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      axios
        .delete(`/posts/${id}`) // Send DELETE request to remove the post
        .then((response) => {
          alert(response.data.message); // Show success message
          retrievePosts(); // Refresh the post list after deletion
        })
        .catch((error) => {
          console.log(error);
          alert('Error deleting post');
        });
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">All Posts</h1>
      <div className="table-responsive">
        <table className="table table-striped table-bordered mx-auto">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Category</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post, index) => (
              <tr key={post._id}>
                <th scope="row">{index + 1}</th>
                <td>
                  <Link to={`/post/${post._id}`} style={{ textDecoration: 'none' }}>
                    {post.title}
                  </Link>
                </td>
                <td>{post.description}</td>
                <td>{post.category}</td>
                <td>
                  {/* Edit Link */}
                  <Link to={`/edit/${post._id}`} className="btn btn-warning">
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </Link>
                  &nbsp;
                  {/* Delete Button */}
                  <button 
                    className="btn btn-danger" 
                    onClick={() => deletePost(post._id)}
                  >
                    <i className="fas fa-trash-alt"></i>&nbsp;Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button className="btn btn-success">
          <Link to="/add" style={{ textDecoration: 'none', color: 'white' }}>
            Create New Post
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Home;
