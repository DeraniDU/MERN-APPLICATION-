import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link

function Home() {
  const [posts, setPosts] = useState([]); // State to store posts

  useEffect(() => {
    retrivePosts(); // Fetch posts when the component mounts
  }, []);

  const retrivePosts = () => {
    axios
      .get('/posts')
      .then((response) => {
        setPosts(response.data); // Set posts to state
      })
      .catch((error) => {
        console.log(error); // Handle any errors
      });
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
                  <a className="btn btn-warning" href="#">
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a className="btn btn-danger" href="#">
                    <i className="fas fa-trash-alt"></i>&nbsp;Delete
                  </a>
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
