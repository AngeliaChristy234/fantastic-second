/** @jsx jsx */
import { jsx, css } from '@emotion/core';

// STYLES
import { styleColors, styleFonts, boxShadows } from '../../../styles/abstracts';
import { styleSpacing } from '../../../styles/utils';

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
    fontsize: '1.4rem',
    fontWeight: styleFonts.weightDefault
  }

})

const ProductCard = ({ productName, productPrice, productStock, productImage }) => {
  return (
    <div css={Styles}>
      <img
        src={productImage}
        alt=""
      />
      <span className='name'>{productName}</span>
      <span className='price'>Rp.{productPrice}</span>
      <span className='stock'>sisa {productStock}</span>
    </div>
  )
}

export default ProductCard; 