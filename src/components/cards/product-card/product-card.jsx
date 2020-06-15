import React from 'react';

const ProductCard = ({ productName, productPrice, productStock, productImage }) => {
  console.log(productName)
  return (
    <div>
      <div className="card__product">
        <img
          src={productImage}
          alt=""
          className="card__product--image"/>
        <span className="card__product--name">{productName}</span>
        <span className="card__product--price">{productPrice}</span>
        <span className="card__product--stock">{productStock}</span>
      </div>
    </div>
  )
}

export default ProductCard; 