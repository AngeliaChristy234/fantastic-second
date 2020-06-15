import React from 'react';

const Footer = () => (
      <div>
        <img src="img/logo-top-dark.png" alt="" class="footer__logo" />

        <div class="footer__tentang">
          <span>
            <a href="#" className="heading--tertiary text--white">
              Tentang Fantastic Second
            </a>
          </span>
          <a href="#" className="footer__tentang--li">Cara memesan</a>
          <a href="#" className="footer__tentang--li">Akun Tokopedia</a>
          <a href="#" className="footer__tentang--li">Ongkir dan pengiriman</a>
          <a href="#" className="footer__tentang--li u-mar__btm--mini">Testimoni</a>

          <span>
            <a href="#" className="heading--tertiary text--white">
              Jual Barang Bekas Anda
            </a>
          </span>
          <a href="#" className="footer__tentang--li">Cara dan prosedur menjual</a>
        </div>

        <div className="footer__kontak">
          <a href="#" className="footer__kontak--li">Hubungi kami</a>
          <a href="#" className="footer__kontak--li">ask@fantasticsecond.com</a>
          <a href="#" className="footer__kontak--li u-mar__btm--mini">021-651 3169</a>

          <a href="#" className="footer__kontak--li">@fantastic.second</a>
          <a href="#" className="footer__kontak--li">copyright reserved</a>
          <a href="#" className="footer__kontak--li">read our privacy policy</a>
        </div>
      </div>
)

export default Footer;