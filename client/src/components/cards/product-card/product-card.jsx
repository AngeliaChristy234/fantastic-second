/** @jsx jsx */
import { jsx, css } from '@emotion/core';

// STYLES
import { styleColors, styleFonts, boxShadows } from '../../../styles/abstracts';
import { styleSpacing } from '../../../styles/utils';

// PACKAGES
import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

// REDUX
import { storeCurrentlyViewed } from '../../../redux/product/product.actions';

const Styles = css({
  position: 'relative',
  width: '100%',
  height: '30rem',
  backgroundColor: styleColors.white,
  boxShadow: boxShadows.point5,
  color: styleColors.secondaryDark,
  fontFamily: styleFonts.secondary,
  paddingBottom: styleSpacing.spacingSmall,
  marginBottom: styleSpacing.spacingMedium,
  transition: 'all .5s ease', 

  '&:hover': {
    transform: 'translateY(-0.5rem)',
    boxShadow: boxShadows.point8,
  },

  '& img': {
    width: '100%',
    minHeight: '20rem',
    objectFit: 'cover'
  },

  '& .name': {
    display: 'block',
    margin: '1rem',
    fontsize: styleFonts.sizeMini,
    fontWeight: styleFonts.weightDefault
  },

  '& .price': {
    position: 'absolute',
    bottom: '3px',
    margin: '0 0 0 1rem',
    fontWeight: styleFonts.weightBold
  },

  '& .stock': {
    position: 'absolute',
    bottom: '3px',
    right: '0',
    margin: '0 1rem 0 0',
    fontsize: styleFonts.sizeMini,
    fontWeight: styleFonts.weightDefault
  }

})

class ProductCard extends React.Component {

  fetchProductAndItems(id, storeViewedItem) {
    const obj = {id}

    axios.post('http://localhost:5000/api/product-to-view', obj)
    .then(function (response) {    
      console.log(response.data);
      storeViewedItem(response.data)
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  render() {
    const { productName, productPrice, productStock, productImage, productId, storeViewedItem } = this.props
            
    return (
      <div css={Styles} onClick={() => {
        this.fetchProductAndItems(productId, storeViewedItem)
      }}>
        <img
          src={productImage}
          alt={ productName }
        />
        <span className='name'>{ productName }</span>
        <span className='price'>Rp.{ productPrice }</span>
        <span className='stock'>sisa { productStock }</span>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  storeViewedItem: (productId) => dispatch(storeCurrentlyViewed(productId))
})

export default connect(null, mapDispatchToProps)(ProductCard);