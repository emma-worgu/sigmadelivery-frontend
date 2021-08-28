import React from 'react';

import '../css/edit.css';

const Edit = ({ trackNumber, onTrackNumber, onSubmit, message }) => {
  if (window.screen.width === 780) {
    return (
      <div>
        <h3>You can't Edit using Mobile phone. Please a desktop computer or a laptop.</h3>
      </div>
    );
  } else {
    return (
      <div className='edit-body'>
        <div className='txt-div'>
          <h3 className='txt-hd'>Edit Your Tracking ID</h3>
          <p className='txt-p'>Insert the tracking ID you wish to edit here.</p>
        </div>
        <div>
          <label className='edit-label'>Tracking ID</label>
          <input type='text' className='edit-in' value={trackNumber} onChange={onTrackNumber} />
        </div>
        <div className='edit-bt-div'>
          <button className='edit-bt' onClick={onSubmit}>Find</button>
        </div>
        <p>{message.text}</p>
      </div>
    );
  }
};

export default Edit;