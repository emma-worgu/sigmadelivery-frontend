import React from 'react';

import Nav from './nav';
import Carousel from './carousel';
import Error from './Error';
import '../css/login.css';

const Login = ({ email, pass, message, onSubmit, onPass, onEmail }) => {

  const headerText = document.location.pathname === '/login' ? 'Login to Manage Your Account' : 'Register An Account here';
  const err = message.error ? <Error message={message.text}/> : null;
  return (
    <div>
      <Nav />
      {/* <Carousel /> */}
      <div className="login-div">
        <div>
          <h3>{headerText}</h3>
          {err}
        </div>
        <div className="input-div">
          <label>Email</label>
          <br/>
          <input type="email" className="em-in" value={email} onChange={onEmail} />
        </div>
        <div className="input-div">
          <label>Password</label>
          <br/>
          <input type="password" className="em-in" value={pass} onChange={onPass} />
        </div>
        <br/>
        <div className="lg-bt-div">
          <button className="lg-bt" onClick={onSubmit}><b>{message.loading ? 'Please Wait...' : 'Login'}</b></button>
        </div>
      </div>
    </div>
  );
};

export default Login;