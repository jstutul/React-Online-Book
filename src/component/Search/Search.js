import React from "react";
import "./Search.css";
const Search = (props) => {
  return (
    <form className="d-flex w-75 mx-auto search-box">
      <input
        onChange={props.handleSearch}
        className="form-control me-2"
        type="search"
        placeholder="Search"
      />
    </form>
  );
};

export default Search;
