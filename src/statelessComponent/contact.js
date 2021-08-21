import React from 'react';
import Carousel from './carousel';
import Nav from './nav';

import '../css/contact.css';
import Footer from './footer';

const Contact = () => {
  return (
    <div>
      <Nav />
      <Carousel />
      <div className="contact-body">
        <div className="con-hd">
          <h1 className="con-txt">CONTACT US</h1>
        </div>
        <div className="con-stxt">
          <h4 className="con-h4">Have any questions, want to get quote, whatever reason we are happy to help. Just fill in this form and we will get in touch asap!!</h4>
        </div>
        <div className="con-in" id="con-id">
          <div className="con-in-div">
            <label htmlFor="name" className="label">Name:</label>
            <input name="name" className="con-int" id="nm-id" type="text" />
          </div>
          <div className="con-in-div">
            <label htmlFor="email" className="label">Email:</label>
            <input name="email" className="con-int" type="email" />
          </div>
          <div className="con-in-div">
            <label htmlFor="message" className="label">Message:</label>
            <textarea
              id="message"
              autoComplete="off"
              rows="4"
              cols="35"
              className="con-int"
            ></textarea>
          </div>
        </div>
        <div className="con-mess">
          <button className="con-bt"><b>Send Message</b></button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;