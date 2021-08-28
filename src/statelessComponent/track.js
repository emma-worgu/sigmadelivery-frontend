import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Carousel from './carousel';
import Nav from './nav';

import '../css/track.css';
import Footer from './footer';

const Track = () => {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const[data, setData] = useState('');
  const history = useHistory();
  const doc = sessionStorage.getItem('doc');

  const renderFunc = () => {
    if (doc === null) {
      history.push('/');
      return null;
    }
    const parseDoc = JSON.parse(doc);
    setData(parseDoc.data)
  };

  console.log(data);

  useEffect(() => {
    renderFunc();
  }, []);

  console.log();

  return (
    <div>
      <Nav />
      <Carousel />
      <div className="tr-body">
        <div className="shd">
          <h1 className="shd-txt">SHIPMENT DETAILS</h1>
        </div>
        <div className='col'>
          <div className='sst-div'>
            <h1 className={data.shipStatus === 'transit' ? 'transit' : 'held'}>{data.shipStatus === 'transit' ? 'In Transit' : 'Held'}</h1>
          </div>
          <div>
            <h1>{data.trackNumber}</h1>
          </div>
        </div>
        <div className='shipper-txt'>
            <div>
            <div className='shipper'>
              <h3 className='shd-hd'>Shipper's Information</h3>
            </div>
            <p className='shp-txt'>{data.shipperName}</p>
            <p className='shp-txt'>{data.shipperEmail}</p>
            <p className='shp-txt'>{data.shipperTel}</p>
            <p className='shp-txt'>{data.shipperAdd}</p>
          </div>
          <div>
            <div className='shipper'>
              <h3 className='shd-hd'>Receiver's Information</h3>
            </div>
            <p className='shp-txt'>{data.recieverName}</p>
            <p className='shp-txt'>{data.recieverEmail}</p>
            <p className='shp-txt'>{data.recieverTel}</p>
            <p className='shp-txt'>{data.recieverAdd}</p>
          </div>
          <div>
            <div className='shipper'>
              <h3 className='shd-hd'>Shipment Information</h3>
            </div>
            <p className='shp-txt'>Origin: {data.origin}</p>
            <p className='shp-txt'>Destination: {data.dest}</p>
            <p className='shp-txt'>Status: {data.shipStatus}</p>
            <p className='shp-txt'>Package Type: {data.packageType}</p>
            <p className='shp-txt'>Shipping Type: {data.shipType}</p>
            <p className='shp-txt'>Shipping Mode: {data.shipMode}</p>
            <p className='shp-txt'>Payment Mode: {data.payMode}</p>
            <p className='shp-txt'>Expected Delivery Date: {new Date(data.deliveryDate).toLocaleDateString('en-US', options)}</p>
            <p className='shp-txt'>Departure Time: {data.departureTime}</p>
            <p className='shp-txt'>Pick-Up Date: {new Date(data.pickupDate).toLocaleDateString('en-US', options)}</p>
            <p className='shp-txt'>Pick-Up Time: {data.pickupTime}</p>
            <p className='shp-txt'>Comment: {data.comment}</p>
          </div>
          </div>
      </div>
      <Footer />
    </div>
  );
};

export default Track;