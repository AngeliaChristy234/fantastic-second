// CSS LIBRARIES
/** @jsx jsx */
import { jsx } from '@emotion/core';
import {Row} from 'antd';

// STYLES
import Styles from './productpage.styles';

// PACKAGES
import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

// REACT COMPONENTS
import ProductDetails from '../../components/products/product-details/product-details.component';
import ProductDescription from '../../components/products/product-description/product-description';
import ProductReviews from '../../components/products/product-reviews/product-reviews.component';
// import ProductCard from '../../components/cards/product-card/product-card';

// REDUX SELECTORS
import { beingViewedSelector } from '../../redux/product/product.selector';

class ProductPage extends React.Component {
  constructor() {
    super()
    this.fetchProductAndItems = this.fetchProductAndItems.bind(this)

    this.state = {

    }
  }

  fetchProductAndItems(id) {
    const obj = {id}

    axios.post('http://localhost:5000/api/product-to-view', obj)
    .then(function (response) {      
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  componentDidMount (id) {
    this.fetchProductAndItems(id)
  }

  render() {
    const { viewedProductId } = this.props;

    return (
      <div css={Styles.container}>
      {
        this.componentDidMount(viewedProductId)
      }

      {/* Images, Condition, Price, Quality, Buttons */}

        <section css={Styles.details}>
          <ProductDetails/>
        </section>

      {/* Description according to quality % */}

        <section css={Styles.description}>
          <ProductDescription/>
        </section>

      {/* Reviews from people */}

        <section css={Styles.description}>
          <ProductReviews/>
        </section>

      {/* Related Products */}

        <section css={Styles.related}>
          <h5>Lihat barang lainnya</h5>
          <Row gutter={24}>
            {
              // products.map(item => item.map(single => (
              //   <Col className="gutter-row" span={6}>
              //     <ProductCard
              //       productName= {single.name}
              //       productPrice= {single.price}
              //       productStock= {single.stock}
              //       productImage= {single.image}
              //     />
              //   </Col>
              // ))) 
            }
          </Row>
        </section>
        
      </div>
    )
  }
}

const mapStateToProps = state => ({
  viewedProductId: beingViewedSelector(state)
})

export default connect(mapStateToProps)(ProductPage);
