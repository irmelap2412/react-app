import React, { useState } from "react";
import "./Searchbar.css";

function Searchbar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  function search(){
    
  }

  return ( // Added return statement
    <div className="searchbar">
      <input
        type="text"
        placeholder="Search users..."
        value={searchTerm} // Sets the input value to state
        onChange={handleInputChange} // Updates state on change
      />
      <i className="fa-solid fa-magnifying-glass" id = "searchbtn" onclick = {search}></i>
    </div>
  );
}

export default Searchbar;
