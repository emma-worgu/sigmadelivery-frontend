import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomeLogic from './statefulComponent/home';
import Track from './statelessComponent/track';
import Contact from './statelessComponent/contact';
import Login from './statefulComponent/Login';
import Dashboard from './statefulComponent/Dashboard';
import EditTrackID from './statefulComponent/Edit';
import EditInfo from './statefulComponent/EditInfo';
import Online from './statelessComponent/online';
import Flutter from './statefulComponent/Flutterwave';

function App() {
  const[data, setData] = useState(false);

  const date = 1632257696224 + 2592000000 + 2592000000;
  const now = Date.now();

  const onlineStatus = async () => {
    const url = 'https://sigmadelivery.herokuapp.com/admin/online'
    const req = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });

    const res = await req.json();
    if (req.status === 200) {
      return setData(res.onlineStatus.online);
    }
  };

  useEffect(() => {
    onlineStatus();
  }, []);

  if (data === true && date < now) {
    return (
      <Router>
        <Switch>
          <Route path = '/' exact component={Online} />
          <Route path = '/pay' exact component={Flutter} />
          <Route component={Online} />
        </Switch>
      </Router>
    );
  } else {
    return (
      <Router>
        <Switch>
          <Route path = '/' exact component={HomeLogic} />
          <Route path = '/track' component={Track} />
          <Route path = '/contact' component={Contact} />
          <Route path = '/login' exact component={Login} />
          <Route path = '/register' exact component={Login} />
          <Route path = '/dash' exact component={Dashboard} />
          <Route path = '/editID' exact component={EditTrackID} />
          <Route path = '/edit' exact component={EditInfo} />
          <Route component={HomeLogic} />
        </Switch>
      </Router>
    );
  };
}

export default App;
