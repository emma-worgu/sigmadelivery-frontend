import React from 'react';

import '../css/error.css';

const Error = ({ message }) => {
  return (
    <div className="err">
      <div className="err-card">
        <p className="err-p">{message}</p>
        <button className="err-bt">Close</button>
      </div>
    </div>
  );
};

export default Error;