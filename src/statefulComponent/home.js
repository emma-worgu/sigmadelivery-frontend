import React, { useState } from 'react';
import { useHistory } from 'react-router';

import HomePage from '../statelessComponent/home';

const HomeLogic = () => {
  const history = useHistory();

  const[trackNumber, setTrackNumber] = useState('');
  const[message, setMessage] = useState('');
  const[loading, setLoading] = useState(false);

  const onTrackNumber = (e) => {
    setTrackNumber(e.target.value);
    e.preventDefault();
  };

  const onSubmit = async () => {
    setLoading(true);
    if (trackNumber === '') {
      setLoading(false);
      return setMessage('Tracking Number is Required!!');
    }

    const url = 'https://sigmadelivery.herokuapp.com/admin/id-info/';
    const data = {
      trackNumber,
    };

    // console.log(JSON.stringify(data));
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Access-Control-Allow-Origin-": "no-cors",
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    });
    const doc = await response.json();
    if (response.status === 200) {
      setLoading(false);
      sessionStorage.setItem('doc', JSON.stringify(doc));
      history.push('/track');
    } else {
      setLoading(false);
      setMessage(doc.message);
      alert(doc.message);
    }
    
  };

  return (
    <HomePage trackNumber={trackNumber}
      message={message}
      onTrackNumber={onTrackNumber}
      onSubmit={onSubmit}
      loading={loading}
     />
  );
}

export default HomeLogic;