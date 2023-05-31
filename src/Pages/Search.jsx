import React from "react";
import { useState } from "react";
import "./Search.css"

export default function Search() {
  const [searchText, setSearchText] = useState("");
  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearch = () => {
    console.log("searchText", searchText);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="search"
        value={searchText}
        onChange={handleInputChange}
      />
      <button style={{borderRadius:"10px"}} onClick={handleSearch}>search</button>
    </div>
  );
}
