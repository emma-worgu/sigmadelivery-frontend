import React, { useState } from 'react';
import { useHistory } from 'react-router';

import Login from '../statelessComponent/login';

const MainLogin = () => {
  const history = useHistory();


  const[email, setEmail] = useState('');
  const[pass, setPass] = useState('');
  const[message, setMessage] = useState({
    loading: false,
    text: '',
    error: false,
  });

  const onEmail = (e) => {
    setEmail(e.target.value);
    e.preventDefault();
  };

  const onPass = (e) => {
    setPass(e.target.value);
    e.preventDefault();
  };

  const onSubmit = async () => {
    setMessage({
      loading: true,
    })
    if (email === '') {
      setMessage({
        loading: false,
        text: 'Email is Required!',
      });
    }

    if (pass === '') {
      setMessage({
        loading: false,
        text: 'Password is Required!',
      });
    }
    
    const body = {
      email,
      pass,
    }

    const url = document.location.pathname === '/login' ? 'https://sigmadelivery.herokuapp.com/admin/login' : 'https://sigmadelivery.herokuapp.com/admin/register'
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });

    if (response.status !== 200) {
      const data = await response.json();
      localStorage.setItem('banned', true);

      // history.push('/');
      document.location.reload();
      // return setMessage({
      //   loading: false,
      //   text: data.message,
      //   error: true,
      // });
    } else {
      const data = await response.json();
      console.log(data);
      const stringifyToken = JSON.stringify(data.token);
      sessionStorage.setItem('token', stringifyToken);
      localStorage.setItem('admin', true);
      setMessage({
        loading: false,
      });
      history.push('/dash');
    };
  };
  return (
    <Login email={email}
      pass={pass}
      message={message}
      onSubmit={onSubmit}
      onEmail={onEmail}
      onPass={onPass}
    />
  );
};

export default MainLogin;