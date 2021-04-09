import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Footer, MobileMenu, Navbar } from './components';
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
      <MobileMenu />

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

        <Route exact path='/products/:gender/:designer/:productName'>
          <SingleProductPage />
        </Route>

        <Route exact path='/:gender/designers'>
          <DesignersPage />
        </Route>

        <Route exact path='/:gender/designers/:designer'>
          <DesignerProductsPage />
        </Route>

        <Route exact path='/checkout/cart'>
          <ShoppingCartPage />
        </Route>

        <Route exact path='/:gender/:productsCategory'>
          <CategoryProductsPage />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
