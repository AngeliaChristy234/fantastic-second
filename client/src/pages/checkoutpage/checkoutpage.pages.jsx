// CSS LIBRARIES
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Divider, Row, Col, Card, Button } from 'antd';

// STYLES
import Styles from './checkoutpage.styles';

// PACKAGES
import React from 'react';

// COMPONENTS
import BigCart from '../../components/cart/cart.component';

class CheckoutPage extends React.Component {
  
  render () {
    return (
      <div css={Styles.container}>
        <section css={Styles.cart}>
          <h5>Pilih semua</h5>
          <BigCart/>
          <Divider/>

          {/* Cart Review */}
          <Row gutter={24}>
            <Col span={5}>Pengiriman</Col>
            <Col span={8} className='right'>
              <img src='../../assets/img/logo-sds.svg' alt=''/>
              gratis
            </Col>
            <Col span={5}>Sub Total</Col>
            <Col span={6} className='right'>Rp 10.000.000 ,00</Col>
          </Row>

        </section>

        {/* Address and Reviews */}

        <section css={Styles.reviews}>
          <Row>
            <Col span={13}>
              <Card style={{ width: '100%', marginTop: 16 }} loading={false} className='card'>
                <h5>Alamat Pengiriman</h5>
                <Row>
                  <Col span={12}>
                    <ol>Nama</ol>
                    <ol>Kontak</ol>
                    <ol>Kota</ol>
                    <ol>Kode pos</ol>
                  </Col>
                  <Col span={12} className='right'>
                    <ol>Angelia Christy</ol>
                    <ol>0819617618</ol>
                    <ol>Jakarta Utara</ol>
                    <ol>14000</ol>
                    <span>Bisma 6 blok b15 no 12</span>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col span={8} offset={3}>
              <Card style={{ width: '100%', marginTop: 16 }} loading={false} className='card'>
                <h5>Ringkasan Belanja</h5>
                <Row>
                  <Col span={12}>
                    <ol>Total harga</ol>
                    <ol>Pengiriman</ol>
                    <ol>Asuransi</ol>
                    <span>Total</span>
                  </Col>
                  <Col span={12}>
                    <ol>Rp 10.000.000 ,00</ol>
                    <ol>Rp 10.000</ol>
                    <ol>-</ol>
                    <hr/>
                    <span>Rp 10.010.000 ,00</span>
                  </Col>
                </Row>
              </Card>

              <Button>Pilih Pembayaran</Button>
            </Col>
          </Row>

        </section>

        {/* Shipping */}
        <section css={Styles.shipping}>
          <h5>Pilih metode pengiriman</h5>
          <button>
            <img src='https://seeklogo.com/images/T/Tiki_JNE-logo-09BD368D04-seeklogo.com.png' alt=''/>
          </button>
          <button>
            <img src='https://seeklogo.com/images/S/sicepat-ekspres-logo-F183B280E5-seeklogo.com.png' alt=''/> 
          </button>
        </section>

      </div>
    )
  }
}

export default CheckoutPage;

