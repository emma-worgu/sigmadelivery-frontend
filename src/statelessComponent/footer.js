import React from 'react';

import '../css/footer.css';

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="comp-header">
        <h2 className="comp-hd">Company</h2>
        <div>
          <ul>
            <li className="comp-li"><a href="/">Home</a></li>
            <li className="comp-li"><a href="/#wwd-id">Services</a></li>
            <li className="comp-li"><a href="/#wcu-id">Why Choose Us</a></li>
          </ul>
        </div>
      </div>
      <div className="services-header comp-header">
        <h2 className="ser-hd comp-hd">Services</h2>
        <div>
          <ul>
            <li className="comp-li"><a href="/#airfreight">AirFreight</a></li>
            <li className="comp-li"><a href="/#oceanfreight">Ocean-Freight</a></li>
            <li className="comp-li"><a href="/#warehousing">Warehousing</a></li>
          </ul>
        </div>
      </div>
      <div className="services-header comp-header">
        <h2 className="ser-hd comp-hd">Resources</h2>
        <div>
          <ul>
            <li className="comp-li"><a href="/#tr-section">Track Shipment</a></li>
            <li className="comp-li"><a href="/contact#con-id">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;