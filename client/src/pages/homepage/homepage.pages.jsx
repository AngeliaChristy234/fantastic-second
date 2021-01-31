// ASSETS
import ImgForBanner from '../../assets/img/dummy.jpg';
import LogoSds from '../../assets/img/logo-sds.svg';
import LogoTokopedia from '../../assets/img/Tokopedia.png';

// CSS LIBRARIES
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Row, Col, Carousel } from 'antd';

// STYLES
import Styles from './homepage.styles';

// PACKAGES
import React from 'react';
import axios from 'axios';

// REACT COMPONENTS
import BigTitleCard from '../../components/cards/big-title-card/big-title-card.component';
import ProductCard from '../../components/cards/product-card/product-card';
import TestimonyCard from '../../components/cards/testimony-card/testimony-card.component';
import { Link } from 'react-router-dom';

class Homepage extends React.Component {
  constructor() {
    super()
    this.fetchProducts = this.fetchProducts.bind(this);

    this.state = {
      items: []
    }
  }

  fetchProducts() {
    let state = this;

    axios.get('/api/products-latest')
    .then(function (response) {
      state.setState({ items: response.data})
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  componentDidMount(){
    this.fetchProducts()
  }

  imageBanner = [
    'https://images.unsplash.com/photo-1526745925052-dd824d27b9ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
    'https://images.unsplash.com/photo-1576602976047-174e57a47881?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1649&q=80'
  ]
  categoryPack = [
    {
    name: 'elektronik',
    img: 'https://o.aolcdn.com/images/dims?resize=2000%2C2000%2Cshrink&image_uri=https%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-uploaded-images%2F2020-03%2F73515600-6ef3-11ea-9f4f-064b19b6d6f7&client=a1acac3e1b3290917d92&signature=eb9c25548102132b76c0e6cfc4c6b521d4719d06'
    }, {
      name: 'stationery',
      img: 'https://images.unsplash.com/photo-1510936994138-07e06c7c5add?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    }, {
      name: 'fashion',
      img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
    }]

  render () {
    const { items } = this.state;

    return (
      <div css={Styles.container}>
      <div style={{height: '8rem'}} />

      {/* Big Banner */}

        <section css={Styles.banner}>
          <Carousel >
            <div className='carousel'><img src={this.imageBanner[0]} alt=''/></div>
            <div className='carousel'><img src={this.imageBanner[1]} alt=''/></div>
          </Carousel>
          
          <h2>
            <span>Barang second</span>
            <span>Kondisi mantap!</span>
          </h2>
        </section>

      {/* Top Categories */}

        <section css={Styles.categories}>
          <h3 className='heading'>Lihat kategori</h3>
          <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, {xs: 12, sm: 32}]}>
          {
            this.categoryPack.map(e => (
              <Col className="gutter-row" xs={24} sm={12} md={8}>
                <BigTitleCard cardTitle={e.name} backImg={e.img}/>
              </Col>
            ))
          }
          </Row>  
        </section>

      {/* New Items Card */}

        <section css={Styles.newItems}>
          <h3 className='heading'>Barang terbaru</h3>
          <Row gutter={[16, { xs: 8, sm: 16, md: 24}]}>
           {
             items.map(item => (
              <Col className="gutter-row" xs={12} md={8} lg={6}>
                <ProductCard
                  productId={item.product_id}
                  productName= {item.name}
                  productPrice= {item.price}
                  productStock= {item.stocklevel}
                  productImage= {item.image}
                />
            </Col>
             ))
           }
          </Row>
          <h4 className='link'>Lihat lainnya</h4>
        </section>

      {/* Testimonies */}

        <section>
          <h3 className='heading'>Kata Pelanggan</h3>
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
              <Col className="gutter-row left-3" xs={24} md={12}>
                <div>
                  <h3>Beli langsung di web</h3>
                  <img src={LogoSds} alt=''/>
                </div>
              </Col>
              <Col className="gutter-row right-3" xs={24} md={12}>
                <div>
                  <h3>atau beli di Tokopedia</h3>
                  <img src={LogoTokopedia} alt='' />
                </div>
              </Col>
            </Row>
            
        </section>
      </div>
    )
  }
}

export default Homepage;