import React, { useState } from 'react';
import './Header.css';
import displayIcon from '../images/Display.svg'; // Adjust path as needed
import downIcon from '../images/down.svg'; // Adjust path as needed

const Header = ({ groupBy, setGroupBy, sortBy, setSortBy }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleGroupByChange = (e) => {
    setGroupBy(e.target.value);
    setIsDropdownOpen(false);
  };

  const handleSortByChange = (e) => {
    setSortBy(e.target.value);
    setIsDropdownOpen(false);
  };

  return (
    <div className="header">
      <div className="display-card" onClick={toggleDropdown}>
        <img src={displayIcon} alt="Display Icon" className="display-icon" />
        <span className="display-text">Display</span>
        <img src={downIcon} alt="Dropdown Icon" className={`icon ${isDropdownOpen ? 'open' : ''}`} />
      </div>

      {isDropdownOpen && (
        <div className="header-dropdown">
          <div className="control-group">
            <label>Grouping:</label>
            <select value={groupBy} onChange={handleGroupByChange}>
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>

          <div className="control-group">
            <label>Ordering:</label>
            <select value={sortBy} onChange={handleSortByChange}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
