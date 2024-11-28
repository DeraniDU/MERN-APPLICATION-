import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []      //initialize posts array
    };
  }

  componentDidMount() {
    this.retrivePosts()   //call the method to fetch data from the server
  }

  //method to fetch data from the server
  retrivePosts() {
    axios.get('http://localhost:8000/posts')
      .then((response) => {
        this.setState({ posts: response.data })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <div className="container mt-5">
        <h1 className="text-center mb-4">All Posts</h1>
        <div className="table-responsive">
          <table className="table table-striped table-bordered mx-auto">
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Title</th>
                <th scope='col'>Description</th>
                <th scope='col'>Category</th>
                <th scope='col'>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.posts.map((post, index) => (
                <tr key={post._id}>
                  <th scope='row'>{index + 1}</th>
                  <td>{post.title}</td>
                  <td>{post.description}</td>
                  <td>{post.category}</td>
                  <td>
                    <a className='btn btn-warning' href="#">
                      <i className='fas fa-edit'></i>&nbsp;Edit 
                    </a>
                    &nbsp;
                    <a className='btn btn-danger' href="#">
                      <i className='fas fa-trash-alt'></i>&nbsp;Delete
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
