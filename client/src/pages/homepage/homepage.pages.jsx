// ASSETS
import ImgForBanner from '../../assets/img/dummy.jpg';
import LogoSds from '../../assets/img/logo-sds.svg';
import LogoTokopedia from '../../assets/img/Tokopedia.png';

// CSS LIBRARIES
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Row, Col } from 'antd';

// STYLES
import Styles from './homepage.styles';

// PACKAGES
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// REDUX SELECTORS
import { productsSelector } from '../../redux/product/product.selector';

// REACT COMPONENTS
import BigTitleCard from '../../components/cards/big-title-card/big-title-card.component';
import ProductCard from '../../components/cards/product-card/product-card';
import TestimonyCard from '../../components/cards/testimony-card/testimony-card.component';
import { Link } from 'react-router-dom';

class Homepage extends React.Component {
  render () {

    const {products} = this.props;

    return (
      <div css={Styles.container}>

      {/* Big Banner */}

        <section css={Styles.banner}>
          <img src={ImgForBanner} alt=''/>
          <h2>
            <span>Barang second</span>
            <span>Kondisi mantap!</span>
          </h2>
        </section>

      {/* Top Categories */}

        <section>
          <h3>Lihat kategori</h3>
          <Row gutter={32}>
            <Col className="gutter-row" span={8}>
              <BigTitleCard cardTitle='Elektronik'/>
            </Col>
            <Col className="gutter-row" span={8}>
              <BigTitleCard cardTitle='Buku'/>
            </Col>
            <Col className="gutter-row" span={8}>
              <BigTitleCard cardTitle='Fashion'/>
            </Col>
          </Row>  
        </section>

      {/* New Items Card */}

        <section css={Styles.newItems}>
          <h3>Barang terbaru</h3>
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
          <Link className='link'>Lihat lainnya</Link>
        </section>

      {/* Testimonies */}

        <section>
          <h3>Kata Pelanggan</h3>
          <TestimonyCard
            productName='Macbook Pro 2017'
            testimony='Puas banget belanja disini'
            personName='Zerya Regal'
            image='https://m.ayosemarang.com/images-semarang/post/articles/2020/03/19/53883/ipad-pro-review-featured.jpg'
          />
        </section>

      {/* Advantages & Reasons Why */}

        <section css={Styles.reasonsWhy} className='why'>
            <Row>
              <Col className="gutter-row left-1" span={12}>
                <div>
                  <h2>Harga Mantap</h2>
                </div>
              </Col>
              <Col className="gutter-row right-1" span={12}>
                <img src="https://m.ayosemarang.com/images-semarang/post/articles/2020/03/19/53883/ipad-pro-review-featured.jpg" alt=''/>
              </Col>
            </Row>

            <Row>
              <Col className="gutter-row left-2" span={12}>
                <img src="https://m.ayosemarang.com/images-semarang/post/articles/2020/03/19/53883/ipad-pro-review-featured.jpg" alt='' />
              </Col>
              <Col className="gutter-row right-2" span={12}>
                <div>
                  <h2>Barang teseleksi</h2>
                </div>
              </Col>
            </Row>

            <Row>
              <Col className="gutter-row left-3" span={12}>
                <div>
                  <h3>Beli langsung di web</h3>
                  <img src={LogoSds} alt=''/>
                </div>
              </Col>
              <Col className="gutter-row right-3" span={12}>
                <div>
                  <h3>atau beli di Tokopedia</h3>
                  <img src={LogoTokopedia} alt=''/>
                </div>
              </Col>
            </Row>
            
        </section>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  products: productsSelector
})


export default connect(mapStateToProps)(Homepage);


// <section class="section__testimoni u-pad--body">
// <h2 class="heading--secondary">Kata Pelanggan</h2>
// <div class="row animate--left">
//   <TestimonyCard
  // productName
  // testimony
  // personName
  // image
//   />
// </div>
// </section>

// <section class="section__kelebihan">
// <SectionKelebihan/>
// </section>