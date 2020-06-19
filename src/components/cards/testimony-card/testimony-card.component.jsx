/** @jsx jsx */
import { jsx, css } from '@emotion/core';

// STYLES
import { styleColors, styleFonts, boxShadows } from '../../../styles/abstracts';

const Styles = css({
  position: 'relative',
  display: 'block',
  transform: 'skew(-15deg, 0)',
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
    maxWidth: '50%'
  },

  '& .personName': {
    position: 'absolute',
    bottom: '8%',
    right: '5%',
    margin: '2% 5% 0 0'
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