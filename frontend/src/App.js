import React, {useEffect, useState, setUsers} from "react";
import "./App.css";
import User from "./components/User";
import Searchbar from "./components/Searchbar";
import Messages from "./components/Messages";
import Leftsidebar from "./components/Leftsidebar";
import Rightsidebar from "./components/Rightsidebar";
import Friendactivity from "./components/Friendactivity";
import Matches from "./components/Matches";
import Notifications from "./components/Notifications";
import Saved from "./components/Saved";
import Settings from "./components/Settings";
import SignIn from "./components/SignIn";
import Chat from "./components/Chat";


function App() {
  const [activeComponent, setActiveComponent] = useState('Friendactivity');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState([]);
  const handleSignIn = (email) => {
    setUser({ email });
    setIsLoggedIn(true);
  };

  useEffect(() => {
    fetch('http://localhost:3000/api/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case "Matches":
        return <Matches />;
      case "Saved":
        return <Saved />;
      case "Notifications":
        return <Notifications />;
      case "Settings":
        return <Settings />;
      case "Chat":
        return <Chat />;
      default:
        return <Friendactivity />;
    }
  };

  if (!isLoggedIn) {
    return <SignIn onSignIn={handleSignIn} />;
  }

 

  return (
    <div className="container">
      <div className="navbar">
        <Searchbar />
        <div className="rightNavbar">
          <Messages />
          <User />
        </div>
      </div>
      <div className="main">
        <div className="mainLeft">
          <Leftsidebar 
            activeComponent={activeComponent}
            setActiveComponent={setActiveComponent}
            onLogout={handleLogout}
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