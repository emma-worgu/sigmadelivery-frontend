import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomeLogic from './statefulComponent/home';
import Track from './statelessComponent/track';
import Contact from './statelessComponent/contact';

function App() {
  return (
    <Router>
      <Switch>
        <Route path = '/' exact component={HomeLogic} />
        <Route path = '/track' component={Track} />
        <Route path = '/contact' component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
