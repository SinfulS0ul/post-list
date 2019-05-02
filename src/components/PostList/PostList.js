import React, { Component } from "react";
import PostListItem from "../PostListItem/PostListItem";

class PostList extends Component {
  displayPosts = post => {
    return <PostListItem key={post.id} post={post} />;
  };

  render() {
    const { posts, maxPosts, keyword } = this.props;
    let postList = posts;
    if (keyword !== "")
      postList = postList.filter(
        post =>
          post.title.indexOf(keyword) > -1 || post.body.indexOf(keyword) > -1
      );
    postList = postList.slice(0, maxPosts).map(this.displayPosts);
    return <ul>{postList}</ul>;
  }
}

export default PostList;
