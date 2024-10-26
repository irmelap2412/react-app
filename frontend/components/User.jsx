import React from "react";
import "./User.css";
import { useState, useEffect } from "react";

function User() {

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () =>{
    setDropdownVisible((prev)=>!prev);
  };

  return (
    <div className="user" onClick = {toggleDropdown}>
      <i className="fa-solid fa-user"></i> {/* Ikona korisnika */}
      <span></span>
      {dropdownVisible && (
    <div className = "dropdownUser">
<p>Account settings</p>
<p>Help & support</p>
    </div>
  )}
  </div>
  );
}

export default User;