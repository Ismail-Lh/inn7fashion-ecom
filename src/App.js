import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Footer, Navbar } from './components';
import { HomePage, MenPage } from './pages';

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>

        <Route exact path='/men'>
          <MenPage />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
