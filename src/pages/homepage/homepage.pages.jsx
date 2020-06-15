import React from 'react';

import BigTitleCard from '../../components/cards/big-title-card/big-title-card.component';
import ProductCard from '../../components/cards/product-card/product-card';
import TestimonyCard from '../../components/cards/testimony-card/testimony-card.component';
import SectionKelebihan from '../../components/section-kelebihan/section-kelebihan.component';

class Homepage extends React.Component {
  render () {
    return (
      <div>
        <section className="section__banner">
          <img
            alt=""
            className="banner__img" />
          <h1 className="banner__text">Barang second Kondisi mantap!</h1>
        </section>

        <section className="section__kategori u-pad--body">
          <h2 className="heading--secondary">Lihat kategori</h2>
          <div className="row">
            <BigTitleCard cardTitle='Elektronik'/>
            <BigTitleCard cardTitle='Buku'/>
            <BigTitleCard cardTitle='Fashion'/>
          </div>
        </section>

        <section className="section__barang-terbaru u-pad--body">
          <h2 className="heading--secondary">Barang terbaru</h2>
          <div className="row">
            <ProductCard
              productName=''
              productPrice=''
              productStock=''
              productImage=''
            />
          </div>
          <div className="heading--button"><a href="#">Lihat lainnya</a></div>
        </section>

        <section class="section__testimoni u-pad--body">
          <h2 class="heading--secondary">Kata Pelanggan</h2>
          <div class="row animate--left">
            <TestimonyCard
            productName
            testimony
            personName
            image
            />
          </div>
        </section>

        <section class="section__kelebihan">
          <SectionKelebihan/>
        </section>
      </div>
    )
  }
}

export default Homepage;