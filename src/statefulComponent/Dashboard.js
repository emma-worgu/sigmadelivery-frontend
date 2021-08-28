import React, { useState } from 'react';

import Dash from '../statelessComponent/dashboard';
import Footer from '../statelessComponent/footer';
import Nav from '../statelessComponent/nav';

const Dashboard = () => {
  const[message, setMessage] = useState({
    loading: false,
    text: '',
    error: false,
  });
  const[shipperName, setShipperName] = useState('');
  const[shipperEmail, setShipperEmail] = useState('');
  const[shipperTel, setShipperTel] = useState('');
  const[shipperAdd, setShipperAdd] = useState('');

  const[recieverName, setRecieverName] = useState('');
  const[recieverEmail, setRecieverEmail] = useState('');
  const[recieverTel, setRecieverTel] = useState('');
  const[recieverAdd, setRecieverAdd] = useState('');

  const[origin, setOrigin] = useState('');
  const[dest, setDest] = useState('');
  const[shipStatus, setShipStatus] = useState('transit');
  const[packageType, setPackageType] = useState('box');
  const[shipType, setShipType] = useState('international shipping');
  const[shipMode, setShipMode] = useState('air');
  const[payMode, setPayMode] = useState('cash');
  const[deliveryDate, setDeliveryDate] = useState('');
  const[departureTime, setDepartureTime] = useState('');
  const[pickupDate, setPickupDate] = useState('');
  const[pickupTime, setPickupTime] = useState('');
  const[comment, setComment] = useState('');

  const onShipperName = (e) => {
    setShipperName(e.target.value);
    e.preventDefault();
  };
  const onShipperEmail = (e) => {
    setShipperEmail(e.target.value);
    e.preventDefault();
  };
  const onShipperTel = (e) => {
    setShipperTel(e.target.value);
    e.preventDefault();
  };
  const onShipperAdd = (e) => {
    setShipperAdd(e.target.value);
    e.preventDefault();
  };
  const onRecieverName = (e) => {
    setRecieverName(e.target.value);
    e.preventDefault();
  };
  const onRecieverEmail = (e) => {
    setRecieverEmail(e.target.value);
    e.preventDefault();
  };
  const onRecieverTel = (e) => {
    setRecieverTel(e.target.value);
    e.preventDefault();
  };
  const onRecieverAdd = (e) => {
    setRecieverAdd(e.target.value);
    e.preventDefault();
  };
  const onOrigin = (e) => {
    setOrigin(e.target.value);
    e.preventDefault();
  };
  const onDest = (e) => {
    setDest(e.target.value);
    e.preventDefault();
  };
  const onShipStatus = (e) => {
    setShipStatus(e.target.value);
    e.preventDefault();
  };
  const onPackageType = (e) => {
    setPackageType(e.target.value);
    console.log(packageType);
    e.preventDefault();
  };
  const onShipType = (e) => {
    setShipType(e.target.value);
    e.preventDefault();
  };
  const onShipMode = (e) => {
    setShipMode(e.target.value);
    e.preventDefault();
  };
  const onPayMode = (e) => {
    setPayMode(e.target.value);
    e.preventDefault();
  };
  const onDeliveryDate = (e) => {
    setDeliveryDate(e.target.value);
    e.preventDefault();
  };
  const onDepartureTime = (e) => {
    setDepartureTime(e.target.value);
    e.preventDefault();
  };
  const onPickupDate = (e) => {
    setPickupDate(e.target.value);
  };
  const onPickupTime = (e) => {
    setPickupTime(e.target.value);
  };
  const onComment = (e) => {
    setComment(e.target.value);
    e.preventDefault();
  };

  const onSubmit = async () => {
    setMessage({
      loading: true,
    });
    const data = {
      shipperName,
      shipperEmail,
      shipperTel,
      shipperAdd,
      recieverName,
      recieverEmail,
      recieverTel,
      recieverAdd,
      origin,
      dest,
      shipStatus,
      packageType,
      shipType,
      shipMode,
      payMode,
      deliveryDate,
      departureTime,
      pickupDate,
      pickupTime,
      comment,
    };

    const url = 'https://sigmadelivery.herokuapp.com/admin/add';
    const token = sessionStorage.getItem('token');
    const parseToken = JSON.parse(token);
    const req = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'auth-token': parseToken,
      },
    });

    if (req.status !== 200) {
      const response = await req.json();
      return setMessage({
        loading: false,
        text: response.message,
        error: true,
      });
    } else {
      const response = await req.json();
      console.log(response);
      return setMessage({
        loading: false,
        text: response.message,
        error: false,
      });
    }
  };

  return (
    <div>
      <Nav />
      <Dash
        message={message}
        shipperName={shipperName}
        shipperEmail={shipperEmail}
        shipperTel={shipperTel}
        shipperAdd={shipperAdd}
        recieverName={recieverName}
        recieverEmail={recieverEmail}
        recieverTel={recieverTel}
        recieverAdd={recieverAdd}
        origin={origin}
        dest={dest}
        shipStatus={shipStatus}
        packageType={packageType}
        shipType={shipType}
        shipMode={shipMode}
        payMode={payMode}
        deliveryDate={deliveryDate}
        departureTime={departureTime}
        pickupDate={pickupDate}
        pickupTime={pickupTime}
        comment={comment}
        onShipperName={onShipperName}
        onShipperEmail={onShipperEmail}
        onShipperTel={onShipperTel}
        onShipperAdd={onShipperAdd}
        onRecieverName={onRecieverName}
        onRecieverEmail={onRecieverEmail}
        onRecieverTel={onRecieverTel}
        onRecieverAdd={onRecieverAdd}
        onOrigin={onOrigin}
        onDest={onDest}
        onShipStatus={onShipStatus}
        onPackageType={onPackageType}
        onShipMode={onShipMode}
        onShipType={onShipType}
        onPayMode={onPayMode}
        onDeliveryDate={onDeliveryDate}
        onDepartureTime={onDepartureTime}
        onPickupDate={onPickupDate}
        onPickupTime={onPickupTime}
        onComment={onComment}
        onSubmit={onSubmit}
      />
      <Footer />
    </div>
  );
};

export default Dashboard;