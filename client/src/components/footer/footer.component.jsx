import LogoTop from '../../assets/img/logo-top-invert.svg';

// CSS LIBRARIES
/** @jsx jsx */
import { jsx } from '@emotion/core';

// STYLES
import Styles from './footer.styles';

import { Link } from 'react-router-dom';

const Footer = () => (
      <div css={Styles.container}>
        <img src={LogoTop} alt="logo" css={Styles.logo}/>

        <div css={Styles.about}>
          <span>
            <h5 href='https://google.com'>
              Tentang Fantastic Second
            </h5>
          </span>
          <h5 href="#" >Cara memesan</h5>
          <h5 href="#" >Akun Tokopedia</h5>
          <h5 href="#" >Ongkir dan pengiriman</h5>
          <h5 href="#" >Testimoni</h5>

          <span css={Styles.miniHeading}>
            <h5 href="#">
              Jual Barang Bekas Anda
            </h5>
          </span>
          <h5 href="#" >Cara dan prosedur menjual</h5>
        </div>

        <div css={Styles.contact}>
          <span>
            <h5 href="#"  >Hubungi kami</h5>
          </span>
          
          <h5 href="#" >ask@fantasticsecond.com</h5>
          <h5 href="#" >021-651 3169</h5>

          <h5 href="#" css={Styles.miniHeading} >@fantastic.second</h5>
          <h5 href="#" >copyright reserved</h5>
          <h5 href="#" >read our privacy policy</h5>
        </div>
      </div>
)

export default Footer;