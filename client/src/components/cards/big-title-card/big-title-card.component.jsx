/** @jsx jsx */
import { jsx, css } from '@emotion/core';

// STYLES
import { boxShadows, styleFonts, styleColors } from '../../../styles/abstracts';
import { absCenter, mq, styleSpacing } from '../../../styles/utils';

const Styles = css({

  '& div': {
    position: 'relative',
    display: 'inline-block',
    textAlign: 'center',
    transform: 'skew(-12deg, 0) translateX(10%)',
    width:'100%',
    height: '30rem',
    boxShadow: boxShadows.point8,
    overflow: 'hidden',

    [mq[0]]: {
      transform: 'skew(-12deg, 0) translateX(10%)'
    },

    [mq[1]]: {
      width: '80%',
      height: '25rem'
    },

    '& img': {
      width: '130%',
      height: '100%',
      objectFit: 'cover',
      transform: 'skew(12deg, 0) translate(-10%)'
    },

    '& h4': {
      position: 'absolute',
      ...absCenter,

      fontSize: styleFonts.sizeMedium,
      fontWeight: styleFonts.weightMedium,
      color: styleColors.secondaryLight,
      textShadow: boxShadows.point5,
      textTransform: 'capitalize'
    }
  }
})

const BigTitleCard = ({ cardTitle, backImg }) => (
  <div css={Styles}>
    <div>
      <img src={ backImg } />
      <h4>{ cardTitle }</h4>
    </div>
  </div>
)

export default BigTitleCard;