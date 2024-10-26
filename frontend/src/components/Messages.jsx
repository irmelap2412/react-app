import React from "react";
import "./Messages.css";
import { useState, useEffect } from "react";


function Messages() {

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () =>{
    setDropdownVisible((prev)=>!prev);
  };

  return (
    <div className="messages" onClick = {toggleDropdown}>
      <i className="fa-solid fa-envelope"></i> 
      <span></span> 
      {dropdownVisible && (
    <div className = "dropdown">
<p>Message</p>
<p>Message</p>
<p>Message</p>
    </div>
  )}
    </div>
);
}

export default Messages;