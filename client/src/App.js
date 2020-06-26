import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

// All Pages
import Homepage from './pages/homepage/homepage.pages';
import SearchResultsPage from './pages/search-results/search-results.pages';
import ProductPage from './pages/productpage/productpage.pages';
// import CheckoutPage from './pages/checkoutpage/checkoutpage.pages';
// import SignLogCard from './components/cards/signlog-card/signlog-card';
import ProductCard_2 from './components/cards/product-card-2/product-card-2.component';

import './App.scss';

class App extends React.Component {
  render () {
    return (
      <div>
        <Header/>
          <Switch>
            <Route exact path='/' component={ Homepage }/>
            <Route exact path='/results' component={ SearchResultsPage } />
            <Route exact path='/product/:productid/:productname' component={ ProductPage } />
            <Route exact path='/test' component={ ProductCard_2 }/>
          </Switch>
        <Footer/>
      </div>
    )
  }
}

export default App;
// <Route exact path='/checkout' component={ CheckoutPage }/>
