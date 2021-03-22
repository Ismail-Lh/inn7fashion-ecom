import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Footer, Navbar } from './components';
import {
  HomePage,
  MenPage,
  SingleProductPage,
  WomenPage,
  DesignersPage,
  DesignerProductsPage,
  ShoppingCartPage,
  CategoryProductsPage,
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

        <Route exact path='/checkout/cart'>
          <ShoppingCartPage />
        </Route>

        <Route exact path='/:categories/:category'>
          <CategoryProductsPage />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
