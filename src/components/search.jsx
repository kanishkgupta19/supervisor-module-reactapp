import React from 'react';
import search_icon from '../assets/icons/search_icon.png';
import notification_icon from '../assets/icons/ic_notification.svg';

const Search = () => {
  return (
    <div
      className="search-notification"
      style={{ 'margin-left': '30px', 'margin-right': '30px' }}
    >
      <img
        src={search_icon}
        alt="search-icon"
        className="inline pt-3 pl-2"
        style={{ position: 'absolute' }}
      />
      <input
        type="text"
        name="search-bar"
        placeholder="Search your vehicle number, parcel, driver name, ..."
      />
      <a className="ml-3" style={{ position: 'relative' }} href="/">
        <img
          src={notification_icon}
          alt="notification"
          className="inline"
          style={{ 'verticle-align': 'middle' }}
        />
        Notification <span className="badge">4</span>
      </a>
    </div>
  );
};

export default Search;
