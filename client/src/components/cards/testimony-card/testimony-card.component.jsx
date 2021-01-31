/** @jsx jsx */
import { jsx, css } from '@emotion/core';

// STYLES
import { boxShadows, styleColors, styleFonts } from '../../../styles/abstracts';
import { mq } from '../../../styles/utils';

const Styles = css({
  position: 'relative',
  display: 'block',
  transform: 'skew(-15deg, 0) translateX(10%)',
  width: '40%',
  height: '25rem',
  backgroundColor: styleColors.secondaryLight,
  boxShadow: boxShadows.point5, 

  '& img': {
    float: 'left',
    width: '40%',
    height: '100%',
    objectFit: 'cover'
  },

  '& .productName': {
    position: 'absolute',
    top: '8%',
    right: '5%',
    float: 'left',
    display: 'block'
  },

  '& .testimony': {
    position: 'absolute',
    top: '22%',
    right: '1%',
    display: 'block',
    maxWidth: '50%',
    fontWeight: styleFonts.weightMedium
  },

  '& .personName': {
    position: 'absolute',
    bottom: '8%',
    right: '5%',
    margin: '2% 5% 0 0'
  },

  [mq[0]]: {
    
    textAlign: 'center'
  },

  [mq[1]]: {
    height: 'auto',
    width: '80%',
    overflow: 'hidden',

    '& img': {
      position: 'relative',
      width: '130%',
      height: '40%',
      transform: 'skew(15deg, 0) translate(-10%)'
    },

    '& .productName, & .testimony, & .personName': {
      position: 'relative',
      float: 'none',
      display: 'block',
      bottom: '0',
      right: '0',
      margin: '0.2rem 1rem',
      maxWidth: '100%'
    },

    '& .personName': {
      textAlign: 'right'
    }
  }
})

const TestimonyCard = ({productName, testimony, personName, image}) => (
  <div css={Styles}>
    <img
      src={image}
      alt="" />
    <span className="productName">{productName}</span>
    <span className="testimony">"{testimony}"</span>
    <span className="personName">~ {personName}</span>
  </div>
)

export default TestimonyCard;