import React from 'react';

import '../css/nav.css';

const Nav = () => {
  const url = document.location.pathname === '/' ? '#wwd-id' : '/#wwd-id';
  const conUrl = document.location.pathname === '/contact' ? '#con-id' : '/contact/#con-id';

  let navButton;

  if (document.location.pathname === '/dash' || document.location.pathname === '/editID') {
    navButton = null
  } else {
    navButton = <a className="nav-a" href={conUrl}><button className="nav-bt"><b>GET QUOTE</b></button></a>
  };

  return (
    <div>
      <div className="nav-section">
        <div className="logo">
          <h3>SIGMA</h3>
        </div>
        <div className="nav-link">
          <ul className="nav-ul">
            <li><a href="/">Home</a></li>
            <li><a href={url}>Services</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="nav-mobile">
          {navButton}
        </div>
      </div>
    </div>
  );
};

export default Nav;