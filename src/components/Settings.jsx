import React, { useState } from 'react';
import './Settings.css';

const Settings = () => {
  const [notifications, setNotifications] = useState(true);
  const [fontSize, setFontSize] = useState('medium');
  const [language, setLanguage] = useState('english');

  return (
    <div className="settings">
      <h2 className="settings-title">Settings</h2>
      <div className = "elements">
      <div className="settings-section">
      <h3>Notifications: {notifications ? 'On' : 'Off'}</h3>
        <label className="switch">
          <input type="checkbox" checked={notifications} onChange={() => setNotifications(!notifications)}/>
          <span className="slider round"></span>
        </label>
      </div>

      <div className="settings-section">
        <h3>Font Size</h3>
        <select value={fontSize}onChange={(e) => setFontSize(e.target.value)}className="select-input">
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
      </div>
    </div>
  );
};

export default Settings;