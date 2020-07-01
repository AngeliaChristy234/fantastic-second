import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

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

// For ADMIN
import Kategori from './backend/kategori-sub/kategori-sub.component';
import Product from './backend/product-item/product-item';
import EditProductItem from './backend/product-item-edit/product-item-edit';

import './App.scss';

class App extends React.Component {
  render () {
    return (
      <div>
        { this.props.location.pathname.includes('/admin') ? '' : <Header/> }
          <Switch>
            <Route exact path='/' component={ Homepage }/>
            <Route exact path='/results' component={ SearchResultsPage } />
            <Route exact path='/product/:productId/:productname' component={ ProductPage } />
            <Route exact path='/test' component={ ProductCard_2 }/>

            <Route exact path='/admin/category' component={ Kategori } />
            <Route exact path='/admin/product' component={ Product } />
            <Route exact path='/admin/edit/:cat/:subcat/:productId' component={ EditProductItem } />
          </Switch>
        { this.props.location.pathname.includes('/admin') ? '' : <Footer/> }
      </div>
    )
  }
}

export default withRouter(App)
// <Route exact path='/checkout' component={ CheckoutPage }/>
