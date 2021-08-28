import React from 'react';
import { useHistory } from 'react-router';

import '../css/dashboard.css';

const EditInfo = (props) => {
  const history = useHistory();
  if (window.screen.width <= 780) {
    return (
      <div>
        <h2>Please use a desktop computer to access this page</h2>
      </div>
    );
  } else {
    const onSubmit = () => {
      history.push('/dash');
    };
    return (
      <div className='gen-body'>
        <div className='gen-hd-div'>
          <div>
            <h3>Generate Tracking ID</h3>
            <p>Once this Tracking ID has been generated, please do well to keep it save. It is non-retrival</p>
          </div>
          <div className='gen-hd-bt'>
            <button className='gen-bt' onClick={onSubmit} ><b>Dashboard</b></button>
          </div>
        </div>
        <div className='gen-div'>
          <div className='gen-in-div'>
            <label className='gen-label'>Shipper's Name</label>
            <input type='text' className='gen-in' value={props.shipperName} onChange={props.onShipperName} />
          </div>
          <div className='gen-in-div'>
            <label className='gen-label'>Shipper's Email</label>
            <input type='email' className='gen-in' value={props.shipperEmail} onChange={props.onShipperEmail} />
          </div>
          <div className='gen-in-div'>
            <label className='gen-label'>Shipper's Tel</label>
            <input type='text' className='gen-in' value={props.shipperTel} onChange={props.onShipperTel} />
          </div>
          <div className='gen-in-div'>
            <label className='gen-label'>Shipper's Address</label>
            <input type='text' className='gen-in' value={props.shipperAdd} onChange={props.onShipperAdd} />
          </div>
          <div className='gen-in-div'>
            <label className='gen-label'>Receiver's Name</label>
            <input type='text' className='gen-in' value={props.recieverName} onChange={props.onRecieverName} />
          </div>
          <div className='gen-in-div'>
            <label className='gen-label'>Receiver's Email</label>
            <input type='email' className='gen-in' value={props.recieverEmail} onChange={props.onRecieverEmail} />
          </div>
          <div className='gen-in-div'>
            <label className='gen-label'>Receiver's Tel</label>
            <input type='text' className='gen-in' value={props.recieverTel} onChange={props.onRecieverTel} />
          </div>
          <div className='gen-in-div'>
            <label className='gen-label'>Receiver's Address</label>
            <input type='text' className='gen-in' value={props.recieverAdd} onChange={props.onRecieverAdd} />
          </div>
          <div className='gen-in-div'>
            <label className='gen-label'>Origin</label>
            <input type='text' className='gen-in' value={props.origin} onChange={props.onOrigin} />
          </div>
          <div className='gen-in-div'>
            <label className='gen-label'>Destination</label>
            <input type='text' className='gen-in' value={props.dest} onChange={props.onDest} />
          </div>
          <div className='gen-in-div'>
            <label className='gen-label'>Current Destination</label>
            <input type='text' className='gen-in' value={props.currDest} onChange={props.onCurrDest} />
          </div>
          <div className='gen-in-div'>
            <label className='gen-label'>Weight</label>
            <input type='text' className='gen-in' value={props.wght} onChange={props.onWght} />
          </div>
          <div className='gen-in-div'>
            <label className='gen-label'>Shipment Status</label>
            <select className='gen-in' value={props.shipStatus} onChange={props.onShipStatus} >
              <option value='transit'>In Transit</option>
              <option value='held'>Held</option>
            </select>
          </div>
          <div className='gen-in-div'>
            <label className='gen-label'>Package Type</label>
            <select className='gen-in' value={props.packageType} onChange={props.onPackageType}>
              <option value='box'>Box</option>
              <option value='bag'>Bag</option>
            </select>
          </div>
          <div className='gen-in-div'>
            <label className='gen-label'>Type of Shipment</label>
            <select className='gen-in' value={props.shipType} onChange={props.onShipType}>
              <option value='international shipping'>International Shipping</option>
              <option value='local shipping'>Local Shipping</option>
            </select>
          </div>
          <div className='gen-in-div'>
            <label className='gen-label'>Shipment Mode</label>
            <select className='gen-in' value={props.shipMode} onChange={props.onShipMode}>
              <option value='air'>Airfreight</option>
              <option value='ocean'>Ocean-Freight</option>
            </select>
          </div>
          <div className='gen-in-div'>
            <label className='gen-label'>Payment Mode</label>
            <select className='gen-in' value={props.payMode} onChange={props.onPayMode}>
              <option value='cash'>CASH</option>
              <option value='check'>CHECK</option>
            </select>
          </div>
          <div className='gen-in-div'>
            <label className='gen-label'>Expected Delivery Date</label>
            <input type='date' className='gen-in' value={props.deliveryDate} onChange={props.onDeliveryDate} />
          </div>
          <div className='gen-in-div'>
            <label className='gen-label'>Departure Time</label>
            <input type='time' className='gen-in' value={props.departureTime} onChange={props.onDepartureTime}/>
          </div>
          <div className='gen-in-div'>
            <label className='gen-label'>Pick-up Date</label>
            <input type='date' className='gen-in' value={props.pickupDate} onChange={props.onPickupDate}/>
          </div>
          <div className='gen-in-div'>
            <label className='gen-label'>Pick-up Time</label>
            <input type='time' className='gen-in' value={props.pickupTime} onChange={props.onPickupTime}/>
          </div>
          <div className='gen-in-div'>
            <label className='gen-label'>Comment</label>
            <textarea className='gen-in gen-text' value={props.comment} onChange={props.onComment}></textarea>
          </div>
          <div className='gen-bt-div'>
            <button className='gen-bt' onClick={props.onSubmit}><b>{props.message.loading ? 'Updating' : 'Update'}</b></button>
          </div>
          <h4 style={props.message.error ? {color: 'red'} : {color: 'green'}}>{props.message.text}</h4>
        </div>
      </div>
    );
  }
};

export default EditInfo;