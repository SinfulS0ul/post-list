import React, { Component } from "react";

class PostList extends Component {
  render() {
    return (
      <li>
        <p>{this.props.post.title}</p>
        <p>{this.props.post.body}</p>
      </li>
    );
  }
}

export default PostList;
