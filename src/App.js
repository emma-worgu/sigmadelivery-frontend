import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomeLogic from './statefulComponent/home';
import Track from './statelessComponent/track';
import Contact from './statelessComponent/contact';
import Login from './statefulComponent/Login';
import Dashboard from './statefulComponent/Dashboard';
import EditTrackID from './statefulComponent/Edit';
import EditInfo from './statefulComponent/EditInfo';

function App() {
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
      </Switch>
    </Router>
  );
}

export default App;
