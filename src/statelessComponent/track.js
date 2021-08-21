import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Carousel from './carousel';
import Nav from './nav';

import '../css/track.css';
import Footer from './footer';

const Track = () => {
  const[data, setData] = useState('');
  const history = useHistory();
  const doc = localStorage.getItem('doc');

  const renderFunc = () => {
    if (doc === null) {
      history.push('/');
      return null;
    }
    const parseDoc = JSON.parse(doc);
    setData(parseDoc.doc)
  };

  useEffect(() => {
    renderFunc();
  }, []);

  return (
    <div>
      <Nav />
      <Carousel />
      <div className="tr-body">
        <div className="shd">
          <h1 className="shd-txt">SHIPMENT DETAILS</h1>
        </div>
        <div>
          <h2>Location</h2>
          <h4>{data.location}</h4>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Track;