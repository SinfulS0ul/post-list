import React from "react";

export const SearchBar = props => {
  return (
    <input
      autoComplete="off"
      placeholder="Type a keyword"
      onChange={props.handleInputChange}
    />
  );
};
