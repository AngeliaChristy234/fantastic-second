import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Components
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

// All Pages
import Homepage from './pages/homepage/homepage.pages';
import SearchResultsPage from './pages/search-results/search-results.pages';
import ProductPage from './pages/productpage/productpage.pages';
import CheckoutPage from './pages/checkoutpage/checkoutpage.pages';
import SignLogCard from './components/cards/signlog-card/signlog-card';

import './App.scss';

class App extends React.Component {
  render () {
    return (
      <div>
        
          <Switch>
            <Route exact path='/' component={ Homepage }/>
            <Route exact path='/results' component={ SearchResultsPage } />
            <Route exact path='/products' component={ ProductPage } />
            <Route exact path='/checkout' component={ CheckoutPage }/>
            <Route exact path='/test' component={ SignLogCard }/>
          </Switch>
        
      </div>
    )
  }
}

export default App;
