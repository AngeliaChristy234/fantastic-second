import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// REDUX SELECTORS
import { productsSelector } from '../../redux/product/product.selector';

// REACT COMPONENTS
import Filters from '../../components/filter/filter.component';
import ProductCard from '../../components/cards/product-card/product-card';

class SearchResultsPage extends React.Component {

  render() {
    const {products} = this.props;

    console.log(products.map(item => item))

    return (
      <div>
        <section class="section__result-top">
          <h3 class="heading--tertiary--thin">Hasil pencaharian untuk {products.name}</h3>
        </section>

        <section class="section__filter filter u-pad--body">
          <Filters/>
        </section>

        <div className="NMrow">
          {
           products.map(item => item.map(single => (
            <ProductCard
              productName= {single.name}
              productPrice= {single.price}
              productStock= {single.stock}
              productImage= {single.image}
            />
           ))) 
          }
          
        </div>

        <section class="section__serupa u-pad--body">
          <h3 class="heading--tertiary--thin">Sejenis 'hello'</h3>
          <ProductCard/>
        </section>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  products: productsSelector
})


export default connect(mapStateToProps)(SearchResultsPage);