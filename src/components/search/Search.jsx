import React from "react";
import TextField from "@material-ui/core/TextField";
import "./Search.scss";

function Search({ searchValue, handleChange }) {
  return (
    <div className="search-box">
      <TextField
        id="standard-basic"
        label="Search Coin"
        value={searchValue}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
