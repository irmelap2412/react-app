import React from "react";
import "./App.css";
import User from "./components/User";
import "./components/Searchbar.css"
import Searchbar from "./components/Searchbar";
import Messages from "./components/Messages";
import Leftsidebar from "./components/Leftsidebar"

function App() {
  return (
    <div className="container">
      <div className="navbar">
        <Searchbar/>
        <div className="rightNavbar">
        <Messages/>
        <User/>
        </div>
      </div>
      <div className="main">
        <div className="mainLeft"><Leftsidebar/></div>
        <div className="mainRight"></div>
      </div>
    </div>
  );
}

export default App;
