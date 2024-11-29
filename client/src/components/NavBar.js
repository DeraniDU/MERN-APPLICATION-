import React, { Component } from 'react';

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="/">Posts</a>
          </div>
        </nav>
      </div>
    );
  }
}
