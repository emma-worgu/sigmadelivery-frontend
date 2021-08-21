import React from 'react';
import Nav from './nav';
import Carousel from './carousel';

import '../css/home.css';

import bus from '../assest/bus.jpg';
import Air from '../assest/AirFreight.png';
import Ocean from '../assest/Ocean-Freight.png';
import Ware from '../assest/Warehousing.png';
import Cost from '../assest/cost.png';
import Safe from '../assest/safe.png';
import Shipping from '../assest/shipping.png';
import LineupTrucks from '../assest/lineup-trucks.jpg';
import BikeTruck from '../assest/bike-truck.jpg';
import Cargo from '../assest/cargo.jpg';
import Footer from './footer';

const HomePage = ({ trackNumber, message, onTrackNumber, onSubmit, loading }) => {

  const check = loading ? 'Checking...' : 'Track Item'
  return (
    <div>
      <Nav />
      <Carousel />
      <div className="home-body">
        <div className="tr-div" id="tr-section">
          <div className="tr-head-div">
            <h4 className="tr-head">Enter your tracking Number to track your item</h4>
          </div>
          <div>
            <input type="text" name="tr-in" className="tr-in" placeholder="Enter your tracking number" value={trackNumber} onChange={onTrackNumber}/>
          </div>
          <div className="tr-sub-div">
            <button className="tr-sub" onClick={onSubmit}><b>{check}</b></button>
          </div>
          {/* <div className="err-div">
            <p>{message}</p>
          </div> */}
        </div>
        <div className="what-we-do" id="wwd-id">
          <h1 className="what-we-do-txt">WHAT WE DO</h1>
        </div>
        <div className="wwd-txt">
          <div className="wwd-card">
            <div className="wwd-img">
              <img src={Air} alt="airfreight" id="airfreight"/>
            </div>
            <div className="wwd-card-txt">
              <h3>AirFreight</h3>
            </div>
          </div>
          <div className="wwd-card">
            <div className="wwd-img">
              <img src={Ocean} alt="oceanfreight" id="oceanfreight"/>
            </div>
            <div className="wwd-card-txt">
              <h3>Ocean-Freight</h3>
            </div>
          </div>
          <div className="wwd-card">
            <div className="wwd-img">
              <img src={Ware} alt="warehousing" id="warehousing"/>
            </div>
            <div className="wwd-card-txt">
              <h3>Warehousing</h3>
            </div>
          </div>
        </div>

        {/* Quality without questions starts here */}


        <div className="os">
          <div className="os-txt">
            <div className="os-txt-head">
              <h3>Quailty Without Questions</h3>
            </div>
            <p className="os-txt-p">Looking for the logistics company you can trust. Look no further because SIGMA LOGISTICS is here to serve you.</p>
            <div className="os-bt-div">
              <button className="os-txt-button"><b>GET QUOTE</b></button>
            </div>
          </div>
          <div className="os-img">
            <img src={bus} alt="delivery" width="100%" height="350px" />
          </div>
        </div>

        {/* Why Choose us Starts Here */}

        <div className="wcu" id="wcu-id">
          <div className="what-we-do">
            <h1 className="what-we-do-txt">WHY CHOOSE US?</h1>
          </div>
          <div className="wcu1">
            <div className="cargo">
              <img src={Cargo} alt="bike-truck" width="100%" height="100%" />
            </div>
            <div className="wcu-icons">
              <div className="wcu-icons-img">
                <img src={Cost} alt="cost" />
              </div>
              <div className="wcu-icons-txt">
                <h4>COST SAVING</h4>
              </div>
            </div>
            <div className="lineup-trucks">
              <img src={LineupTrucks} alt="trucks" width="100%" height="100%" />
            </div>
          </div>
          <div className="wcu2">
            <div className="wcu-icons">
              <div className="wcu-icons-img">
                <img src={Safe} alt="safe" />
              </div>
              <div className="wcu-icons-txt">
                <h4>SAFE PACKING</h4>
              </div>
            </div>
            <div className="bike-truck">
              <img src={BikeTruck} alt="bike-truck" width="100%" height="100%" />
            </div>
            <div className="wcu-icons">
              <div className="wcu-icons-img">
                <img src={Shipping} alt="shipping" />
              </div>
              <div className="wcu-icons-txt">
                <h4>FASTEST SHIPPING</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Total Jobs Done */}
        <div className="jbd">
          <div className="jbd-div">
            <h3 className="jbd-hd">840</h3>
            <h5 className="jbd-txt">Delivered Packages</h5>
          </div>
          <div className="jbd-div">
            <h3 className="jbd-hd">137</h3>
            <h5 className="jbd-txt">Countries Covered</h5>
          </div>
          <div className="jbd-div">
            <h3 className="jbd-hd">740</h3>
            <h5 className="jbd-txt">Tons of Goods</h5>
          </div>
          <div className="jbd-div">
            <h3 className="jbd-hd">600</h3>
            <h5 className="jbd-txt">Satisfied Clients</h5>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;