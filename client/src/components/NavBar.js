import React, { Component } from 'react'

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
         <div class="container">
            <a class="navbar-brand" href="/">Posts</a>
         </div>
        </nav>
      </div>
    )
  }
}
