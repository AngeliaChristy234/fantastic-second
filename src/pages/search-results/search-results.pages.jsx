import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// REDUX SELECTORS
import { productsSelector, testsSelector } from '../../redux/product/product.selector';
import { getProducts } from '../../redux/product/product.reducer';

// REACT COMPONENTS
import Filters from '../../components/filter/filter.component';
import ProductCard from '../../components/cards/product-card/product-card';

class SearchResultsPage extends React.Component {

  constructor(props) {
    super(props);

    this.INITIAL_DATA = {
      elektronik: {
        id: 'E01',
        items: [
          {
            name: 'Iphone 7',
            price: 6000000,
            stock: 6,
            image: '../../assets/img/dummy.jpg'
          },
          {
            name: 'Macbook Pro 16 Inci 2017',
            price: 12000000,
            stock: 12,
            image: '../../assets/img/dummy.jpg'
          },
          {
            name: 'Macbook Pro 13 Inci 2017',
            price: 10000000,
            stock: 10,
            image: '../../assets/img/dummy.jpg'
          },
        ]
      },
      fashion: {
        id: 'F01',
        items: [
          {
            name: 'Topi stylish zaman now',
            price: 25000,
            stock: 25,
            image: '../../assets/img/dummy.jpg'
          }
        ]
      }
    }
  }
  

  render({ searchKeyword, products }) {

    return (
      <div>
        <section class="section__result-top">
          <h3 class="heading--tertiary--thin">Hasil pencaharian untuk "{ searchKeyword }"</h3>
        </section>

        <section class="section__filter filter u-pad--body">
          <Filters/>
        </section>

        <div className="NMrow">

        <ProductCard
          productName = {products.name}
        />

        {
          products.map(item => (
          <ProductCard
            productName = {item}
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
  products: productsSelector
})

const thisClass = new SearchResultsPage;

console.log(mapStateToProps(thisClass.INITIAL_DATA))

// ini kayak nggak ke pass ke SearchResultsPagenya, tp kalau di log udh ada

export default connect(mapStateToProps(thisClass.INITIAL_DATA))(SearchResultsPage);