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

  retrivePosts (){
    axios.get('http://localhost:8000/posts')
    .then((response) => {
      this.setState({posts: response.data})
    })
    .catch((error) => {
      console.log(error)
    })
  }

  render() {
    return (
      <div>
        <h1>Posts</h1>
        <ul>
          {this.state.posts.map((post) => (
            <li key={post._id}>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <p>{post.category}</p>
            </li>
          ))}
        </ul>

      </div>
    )
  }
}
