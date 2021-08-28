import React, { useState } from 'react';
import { useHistory } from 'react-router';

import Edit from '../statelessComponent/edit';
import Nav from '../statelessComponent/nav';

const EditTrackID = () => {
  const history = useHistory();


  const[trackNumber, setTrackNumber] = useState('');
  const[message, setMessage] = useState({
    loading: false,
    text: '',
  });

  const onTrackNumber = (e) => {
    setTrackNumber(e.target.value);
    e.preventDefault();
  };

  const onSubmit = async () => {
    setMessage({
      loading: true,
    });

    const url = 'https://sigmadelivery.herokuapp.com/admin/id-info';
    const data = {
      trackNumber,
    };

    const req = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });

    if (req.status !== 200) {
      const response = await req.json();
      return setMessage({
        loading: false,
        text: response.message,
      });
    } else {
      const response = await req.json();
      const stringifyRes = JSON.stringify(response.data)
      sessionStorage.setItem('trackInfo', stringifyRes);
      setMessage({
        loading: false,
        text: response.message
      });
      history.push('/edit');
    };
  };
  return (
    <div>
      <Nav />
      <Edit
        trackNumber={trackNumber}
        message={message}
        onTrackNumber={onTrackNumber}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default EditTrackID;