import React from 'react';

// REACT COMPONENTS
import ProductDetails from '../../components/products/product-details/product-details.component';
import ProductReviews from '../../components/products/product-reviews/product-reviews.component';
import ProductCard from '../../components/cards/product-card/product-card';

class ProductPage extends React.Component {

  render() {
    return (
      <div>
        <ProductDetails/>
        <ProductReviews/>

        <h3 class="heading--tertiary--thin">Lihat barang lainnya</h3>
        <ProductCard/>
      </div>
    )
  }
}

export default ProductPage;