import React from "react";
import "./User.css";

function User() {
  return (
    <div className="user">
      <i className="fa-solid fa-user"></i> {/* Ikona korisnika */}
      <span></span> {/* Ime korisnika */}
    </div>
  );
}

export default User;