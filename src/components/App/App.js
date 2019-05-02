import React, { Component } from "react";
import PostList from "../PostList/PostList";
import { SearchBar } from "../SearchBar/SearchBar";
import "./App.css";

class App extends Component {
  state = {
    posts: [],
    maxPosts: 10,
    keyword: ""
  };

  displayMorePosts = () => {
    this.setState({ maxPosts: this.state.maxPosts + 10 });
  };

  handleInputChange = e => {
    const target = e.target;
    const value = target.value;
    this.setState({
      keyword: value
    });
  };

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => res.json())
      .then(postList => this.setState({ posts: postList }));
  }

  render() {
    return (
      <div className="App">
        <SearchBar handleInputChange={this.handleInputChange} />
        <PostList
          posts={this.state.posts}
          maxPosts={this.state.maxPosts}
          keyword={this.state.keyword}
        />
        <button onClick={this.displayMorePosts}>Display More Items</button>
      </div>
    );
  }
}

export default App;
