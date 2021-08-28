import React, { useState } from 'react';
import { useHistory } from 'react-router';

import Footer from '../statelessComponent/footer';
import Nav from '../statelessComponent/nav';

import Edit from '../statelessComponent/editInfo';

const EditInfo = () => {
  const history = useHistory();


  const stringifiedData = sessionStorage.getItem('trackInfo');
  const data = JSON.parse(stringifiedData);

  const[message, setMessage] = useState({
    loading: false,
    text: '',
    error: false,
  });
  // const[trackNumber, setTrackNumber] = useState(data.trackNumber);
  const[shipperName, setShipperName] = useState(data.shipperName);
  const[shipperEmail, setShipperEmail] = useState(data.shipperEmail);
  const[shipperTel, setShipperTel] = useState(data.shipperTel);
  const[shipperAdd, setShipperAdd] = useState(data.shipperAdd);

  const[recieverName, setRecieverName] = useState(data.recieverName);
  const[recieverEmail, setRecieverEmail] = useState(data.recieverEmail);
  const[recieverTel, setRecieverTel] = useState(data.recieverTel);
  const[recieverAdd, setRecieverAdd] = useState(data.recieverAdd);

  const[origin, setOrigin] = useState(data.origin);
  const[dest, setDest] = useState(data.dest);
  const[shipStatus, setShipStatus] = useState(data.shipStatus);
  const[packageType, setPackageType] = useState(data.packageType);
  const[shipType, setShipType] = useState(data.shipType);
  const[shipMode, setShipMode] = useState(data.shipMode);
  const[payMode, setPayMode] = useState(data.payMode);
  const[deliveryDate, setDeliveryDate] = useState(data.deliveryDate);
  const[departureTime, setDepartureTime] = useState(data.departureTime);
  const[pickupDate, setPickupDate] = useState(data.pickupDate);
  const[pickupTime, setPickupTime] = useState(data.pickupTime);
  const[comment, setComment] = useState(data.comment);
  const[currDest, setCurrDest] = useState(data.currDest);
  const[wght, setWght] = useState(data.wght);

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
  const onCurrDest = (e) => {
    setCurrDest(e.target.value);
    e.preventDefault();
  };
  const onWght = (e) => {
    setWght(e.target.value);
    e.preventDefault();
  };

  const onSubmit = async () => {
    setMessage({
      loading: true,
    });
    const body = {
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
      trackNumber: data.trackNumber,
    };

    const url = 'https://sigmadelivery.herokuapp.com/admin/edit';
    const token = sessionStorage.getItem('token');
    const parseToken = JSON.parse(token);
    const req = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
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
      setMessage({
        loading: false,
        text: response.message,
        error: false,
      });
      history.push('/editID');
    }
  };

  return (
    <div>
      <Nav />
      <Edit
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
        currDest={currDest}
        wght={wght}
        onCurrDest={onCurrDest}
        onWght={onWght}
      />
      <Footer />
    </div>
  );
};

export default EditInfo;