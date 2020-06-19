// CSS LIBRARIES
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Row, Col } from 'antd';

// STYLES
import Styles from './search-results.styles';

// PACKAGES
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
      <div css={Styles.container}>

      {/* The Top Sweetener and Filters */}

        <section css={Styles.topPart}>
          <h4>Hasil pencaharian untuk "{products.name}"</h4>
          <Filters />
        </section>

      {/* Products From Search Input */}

        <section css={Styles.searchResults}>
          <Row gutter={24}>
            {
              products.map(item => item.map(single => (
                <Col className="gutter-row" span={6}>
                  <ProductCard
                    productName= {single.name}
                    productPrice= {single.price}
                    productStock= {single.stock}
                    productImage= {single.image}
                  />
                </Col>
              ))) 
            }
            {
              products.map(item => item.map(single => (
                <Col className="gutter-row" span={6}>
                  <ProductCard
                    productName= {single.name}
                    productPrice= {single.price}
                    productStock= {single.stock}
                    productImage= {single.image}
                  />
                </Col>
              ))) 
            }
          </Row>
        </section>

      {/* Related Products */}

        <section css={Styles.relatedProducts}>
          <h4>Sejenis {products.name}</h4>
          <Row gutter={24}>
            {
              products.map(item => item.map(single => (
                <Col className="gutter-row" span={6}>
                  <ProductCard
                    productName= {single.name}
                    productPrice= {single.price}
                    productStock= {single.stock}
                    productImage= {single.image}
                  />
                </Col>
              ))) 
            }
          </Row>
        </section>

      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  products: productsSelector
})


export default connect(mapStateToProps)(SearchResultsPage);