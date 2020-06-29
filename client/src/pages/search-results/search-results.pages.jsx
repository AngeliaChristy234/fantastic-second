// CSS LIBRARIES
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Row, Col } from 'antd';

// STYLES
import Styles from './search-results.styles';

// PACKAGES
import React from 'react';
import { connect } from 'react-redux';

// REDUX SELECTORS
import { beingSearchSelector } from '../../redux/product/product.selector';

// REACT COMPONENTS
import Filters from '../../components/filter/filter.component';
import ProductCard from '../../components/cards/product-card/product-card';

class SearchResultsPage extends React.Component {

  renderCards (items) {

    if (items.searchResult.length !== 0) {
      return items.searchResult.map(item => (
        <Col className="gutter-row" span={6}>
          <ProductCard
            key={item.item_id}
            productId = {item.product_id}
            productName= {item.name}
            productPrice= {item.price}
            productStock= {item.stocklevel}
            productImage= {item.image}
          />
        </Col>
      ))
    }

    return (<h2>Tidak ada barang sejenis " {items.searchKeyword} "</h2>)
  }

  render() {
    const { beingSearch } = this.props;    

    return (
      <div css={Styles.container}>

      {/* The Top Sweetener and Filters */}

        <section css={Styles.topPart}>
          <h4>Hasil pencaharian untuk ""</h4>
          <Filters />
        </section>

      {/* Products From Search Input */}

        <section css={Styles.searchResults}>
          <Row gutter={24}>
            { this.renderCards( beingSearch ) }
          </Row>
        </section>

      {/* Related Products */}

        <section css={Styles.relatedProducts}>
          <h4>Sejenis</h4>
          <Row gutter={24}>
          </Row>
        </section>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  beingSearch: beingSearchSelector(state)
})

export default connect(mapStateToProps)(SearchResultsPage);