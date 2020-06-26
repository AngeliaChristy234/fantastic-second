import LogoSds from '../../../assets/img/logo-sds.svg';

// CSS LIBRARIES
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Row, Col, Button} from 'antd';


// STYLES
import Styles from './product-details.styles';

// PACKAGES
// import React from 'react';

const ProductDetails = () => (
  <div>
    <Row justify="start">

    { /* Display Image on Right n Buttons */}

      <Col span={10}>
        <div css={Styles.images}>
          <div className='display'>
            <img src='https://m.ayosemarang.com/images-semarang/post/articles/2020/03/19/53883/ipad-pro-review-featured.jpg' alt="dummy"/>
          </div>

          <div className='imgBtn'>
            <button><img src='https://m.ayosemarang.com/images-semarang/post/articles/2020/03/19/53883/ipad-pro-review-featured.jpg' alt="dummy"/></button>
            <button><img src='https://m.ayosemarang.com/images-semarang/post/articles/2020/03/19/53883/ipad-pro-review-featured.jpg' alt="dummy"/></button>
            <button><img src='https://m.ayosemarang.com/images-semarang/post/articles/2020/03/19/53883/ipad-pro-review-featured.jpg' alt="dummy"/></button>
          </div>
        </div>

      </Col>

      { /* All Details About The Product*/}

      <Col span={14}>
        <div css={Styles.details}>
          <h1>Macbook Pro 17 Inci</h1>

          { /* Quality */}
          <div className='quality'>
            <h5>Pilih kondisi barang</h5>
              <Button size='small'>95%</Button>
              <Button size='small'>80%</Button>
              <Button size='small'>75%</Button>
              <Button size='small'>50%</Button>
              <Button size='small'>40%</Button>
              <Button size='small'>20%</Button>
          </div>

          { /* Price and stock */}
          <Row>
            <Col span={12}>
              <h5>Harga per item:</h5>
              <h3>Rp 20.000.000 ,00</h3>
            </Col>
            <Col span={12}>
              <h5>Sisa stok:</h5>
              <h3>20 item</h3>
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
  </div>
)

export default ProductDetails;