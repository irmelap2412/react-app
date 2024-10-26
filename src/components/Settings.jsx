import React, { useState } from 'react';
import './Settings.css';

const Settings = () => {
  const [notifications, setNotifications] = useState(true);
  const [fontSize, setFontSize] = useState('medium');
  const [language, setLanguage] = useState('english');

  return (
    <div className="settings">
      <h2 className="settings-title">Settings</h2>
      
      <div className="settings-section">
        <h3>Notifications</h3>
        <label className="switch">
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
          />
          <span className="slider round"></span>
        </label>
        <p>Receive notifications: {notifications ? 'On' : 'Off'}</p>
      </div>

      <div className="settings-section">
        <h3>Font Size</h3>
        <select
          value={fontSize}
          onChange={(e) => setFontSize(e.target.value)}
          className="select-input"
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>

      <div className="settings-section">
        <h3>Language</h3>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="select-input"
        >
          <option value="english">English</option>
          <option value="spanish">Español</option>
          <option value="french">Français</option>
          <option value="german">Deutsch</option>
        </select>
      </div>

      <div className="settings-section">
        <h3>Account</h3>
        <button className="settings-button">Change Password</button>
        <button className="settings-button">Update Email</button>
      </div>

      <div className="settings-section">
        <h3>Privacy</h3>
        <button className="settings-button">Manage Privacy Settings</button>
      </div>

      <div className="settings-section">
        <h3>Help & Support</h3>
        <button className="settings-button">Contact Support</button>
        <button className="settings-button">FAQs</button>
      </div>
    </div>
  );
};

export default Settings;