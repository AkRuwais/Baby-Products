import React from "react";
import { useState } from "react";

export default function Search() {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearch = () => {
    console.log("searchText", searchText);
  };

  return (
    <div>
    <input type="text" placeholder="search" value={searchText} onChange={handleInputChange} />
    <button onClick={handleSearch}>search</button>
    </div>
  )
}
