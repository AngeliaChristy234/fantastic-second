import LogoSds from '../../assets/img/logo-sds.svg';

// CSS LIBRARIES
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Row, Col, Button} from 'antd';

// STYLES
import Styles from './productpage.styles.js';
import DetailStyles from './product-details.styles';

// PACKAGES
import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

// REACT COMPONENTS
import ProductDescription from '../../components/products/product-description/product-description';
import ProductCard_2 from '../../components/cards/product-card-2/product-card-2.component'
import ProductReviews from '../../components/products/product-reviews/product-reviews.component';
// import ProductCard from '../../components/cards/product-card/product-card';

// REDUX SELECTORS
import { beingViewedSelector } from '../../redux/product/product.selector';

class ProductPage extends React.Component {
  constructor() {
    super()

    this.state = {
      items: [],
      productImage: '',
      condition: [],
      lowestprice: 0,
      highestPrice: 0,
      totalStock: 0
    }
  }

  componentDidMount (id, name) { 
    const state = this;

    axios.post('/api/product-to-view', { id })
    .then(function (response) {
      const items = response.data,
            productImage = items.map( i => i.image)[0],
            condition = items.map(i => i.condition).sort() ,
            price = items.map(i => i.price).sort(),
            lowestprice = price.pop(),
            highestPrice = price[0],
            stockarr = items.map(i => i.stocklevel),
            totalStock = stockarr.reduce((a, b) => a + b, 0)

      state.setState({ items, productImage, condition,lowestprice, highestPrice, totalStock })
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  makeRupiah(number) {
    let	reverse = number.toString().split('').reverse().join(''),
      ribuan 	= reverse.match(/\d{1,3}/g);
      ribuan	= ribuan.join('.').split('').reverse().join('');

    return ribuan;
  }
  
  render() {
    const { viewedProduct } = this.props;
    const { items, productImage, condition, lowestprice, highestPrice, totalStock } = this.state

    const { productid, productname } = this.props.match.params
    this.componentDidMount( productid, productname)

    return (
      <div css={Styles.container}>
      {/* Images, Condition, Price, Quality, Buttons */}

        <section css={Styles.details}>
          <Row justify="start">

          { /* Big Product Image on Left */}

            <Col span={10}>
              <div css={DetailStyles.images}>
                <img src={productImage} alt="dummy"/>
              </div>
            </Col>

          { /* All Details About The Product*/}

            <Col span={14}>
              <div css={DetailStyles.details}>
                <h1>{productname}</h1>
              { /* Quality */}

                <div className='quality'>
                  <h5>Pilih kondisi barang</h5>
                  { condition.map(i => (<Button size='small'>{i}</Button>)) }
                </div>

              { /* Price and stock */}

                <Row>
                  <Col span={12}>
                    <h5>Kisaran harga berdasarkan stok yang ada:</h5>
                    <h3>Rp { this.makeRupiah(lowestprice) } - { this.makeRupiah( highestPrice) }</h3>
                  </Col>
                  <Col span={12}>
                    <h5>Sisa stok:</h5>
                    <h3>{totalStock} item</h3>
                  </Col>
                </Row>

              { /* Buy / Add to Cart Button */}
                <Row className='buy'>
                  <Col span={12}>
                    <h5>Beli barang di</h5>
                    <img src={LogoSds} alt='fantastic second'/>
                  </Col>
                  <Col span={12}>
                    <h5>atau beli melalui</h5>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/a/a7/Tokopedia.svg' alt="logo tokopedia"/>
                  </Col>
                </Row>

              { /* Extra description */}
                <Row>
                  <Col span={12}>Barang tidak sesuai ekspetasi? Bisa refund.</Col>
                  <Col span={12}>Harga kami di Tokopedia lebih tinggi 10%.</Col>
                </Row>
              </div>
            </Col>
          </Row>

        </section>

      {/* Description according to quality % */}

        <section css={Styles.description}>
        <h5>Pilih barang yang anda inginkan</h5>
          <Row gutter={20}>
            {
              items.map(i => {
                const index = items.findIndex((e) => e.item_id === i.item_id ) + 1,
                      rupiah = this.makeRupiah(i.price)
                
                return (
                  <Col span={8}>
                    <h5>Barang {index}</h5>
                    <ProductCard_2 item={i} rupiah={rupiah} />
                  </Col>
                )
              })
            }
          </Row>
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
  viewedProduct: beingViewedSelector(state)
})

export default connect(mapStateToProps)(ProductPage);
