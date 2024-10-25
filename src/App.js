
import React, { useState } from "react";
import "./App.css";
import User from "./components/User";
import Searchbar from "./components/Searchbar";
import Messages from "./components/Messages";
import Leftsidebar from "./components/Leftsidebar";
import Rightsidebar from "./components/Rightsidebar";
import Friendactivity from "./components/Friendactivity"; // Ensure you import all components
import Friends from "./components/Friends"; // Import other components as needed
//import Notifications from "./components/Notifications";
//import Saved from "./components/Saved";
//import Settings from "./components/Settings";

function App() {
  const [activeComponent, setActiveComponent] = useState('Friendactivity');

  const renderComponent = () => {
    switch (activeComponent) {
      case "Friends":
        return <Friends />;
      default:
        return <Friendactivity />;
    }
  };

  return (
    <div className="container">
      <div className="navbar">
        <Searchbar />
        <div className="rightNavbar">
          <User />
          <Messages />
        </div>
      </div>
      <div className="main">
        <div className="mainLeft">
          <Leftsidebar activeComponent={activeComponent}
            setActiveComponent={setActiveComponent}
          />
        </div>
        <div className="mainRight">
          <Rightsidebar>
            {renderComponent()}
          </Rightsidebar>
        </div>
      </div>
    </div>
  );
}

export default App;
