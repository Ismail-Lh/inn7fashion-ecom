import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Navbar } from './components';
import { HomePage } from './pages';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
