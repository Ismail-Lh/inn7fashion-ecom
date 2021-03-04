import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Footer, Navbar } from './components';
import {
  HomePage,
  MenPage,
  SingleProductPage,
  WomenPage,
  DesignersPage,
  DesignerProductsPage,
} from './pages';

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

        <Route exact path='/women'>
          <WomenPage />
        </Route>

        <Route exact path='/products/:categories/:designer/:name'>
          <SingleProductPage />
        </Route>

        <Route exact path='/:categories/designers'>
          <DesignersPage />
        </Route>

        <Route exact path='/:categories/designers/:designer'>
          <DesignerProductsPage />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
