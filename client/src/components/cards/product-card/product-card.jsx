/** @jsx jsx */
import { jsx, css } from '@emotion/core';

// STYLES
import { styleColors, styleFonts, boxShadows } from '../../../styles/abstracts';
import { mq, styleSpacing } from '../../../styles/utils';

// PACKAGES
import React from 'react';
import { connect } from 'react-redux';

// REDUX
import { storeCurrentlyViewed } from '../../../redux/product/product.actions';

const Styles = css({
  position: 'relative',
  width: '100%',
  height: '30rem',
  paddingBottom: styleSpacing.spacingSmall,
  marginBottom: styleSpacing.spacingMedium,
  backgroundColor: styleColors.white,
  boxShadow: boxShadows.point5,
  color: styleColors.secondaryDark,
  fontFamily: styleFonts.secondary,
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
  },

  [mq[0]]: {
    height: 'auto',

    '& .price, & .stock': {
      position: 'relative',
      display: 'block',
      margin: '0 0 0 1rem'
    }
  },

  [mq[1]]: {
    height: 'auto'
  }

})

class ProductCard extends React.Component {

  handleRedirect(id, name) {
    window.location.href = `/product/${id}/${name}`;
  }

  render() {
    const { productName, productPrice, productStock, productImage, productId, storeViewedItem } = this.props
            
    return (
      <div css={Styles} onClick={() => {
        storeViewedItem(productId, productName)
        this.handleRedirect(productId, productName)
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
  storeViewedItem: (productId, productName) => dispatch(storeCurrentlyViewed(productId, productName))
})

export default connect(null, mapDispatchToProps)(ProductCard);