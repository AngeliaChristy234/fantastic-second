import LogoTop from '../../assets/img/logo-top-invert.svg';

// CSS LIBRARIES
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

// STYLES
import Styles from './footer.styles';

import { Link } from 'react-router-dom';

const Footer = () => (
      <div css={Styles.container}>
        <img src={LogoTop} alt="logo" css={Styles.logo} style={{width: '20%'}}/>

        <div css={Styles.about}>
          <span>
            <Link href='https://google.com'>
              Tentang Fantastic Second
            </Link>
          </span>
          <Link href="#" >Cara memesan</Link>
          <Link href="#" >Akun Tokopedia</Link>
          <Link href="#" >Ongkir dan pengiriman</Link>
          <Link href="#" >Testimoni</Link>

          <span css={Styles.miniHeading}>
            <Link href="#">
              Jual Barang Bekas Anda
            </Link>
          </span>
          <Link href="#" >Cara dan prosedur menjual</Link>
        </div>

        <div css={Styles.contact}>
          <span>
            <Link href="#"  >Hubungi kami</Link>
          </span>
          
          <Link href="#" >ask@fantasticsecond.com</Link>
          <Link href="#" >021-651 3169</Link>

          <Link href="#" css={Styles.miniHeading} >@fantastic.second</Link>
          <Link href="#" >copyright reserved</Link>
          <Link href="#" >read our privacy policy</Link>
        </div>
      </div>
)

export default Footer;