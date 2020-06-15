import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// REDUCERS
import productReducer from '../../redux/product/product.reducer';

// REDUX SELECTORS
import { productsSelector } from '../../redux/product/product.selector';

// REACT COMPONENTS
import Filters from '../../components/filter/filter.component';
import ProductCard from '../../components/cards/product-card/product-card';

class SearchResultsPage extends React.Component {

  render({ searchKeyword }) {
    const { products } = this.props;

    console.log(products);

    return (
      <div>
        <section class="section__result-top">
          <h3 class="heading--tertiary--thin">Hasil pencaharian untuk "{ searchKeyword }"</h3>
        </section>

        <section class="section__filter filter u-pad--body">
          <Filters/>
        </section>

        <div className="NMrow">
          {
            products.items.map(item => (
              <ProductCard
                productName = {item.name}
                productPrice = {item.price}
                productStock = {item.stock}
                productImage = {item.image}
              />
            ))
          }
        </div>

        <section class="section__serupa u-pad--body">
          <h3 class="heading--tertiary--thin">Sejenis {searchKeyword}</h3>
          <ProductCard/>
        </section>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  products: productsSelector()
})

export default connect(mapStateToProps)(SearchResultsPage);