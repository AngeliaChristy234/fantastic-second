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

    [mq[0]]: {
      transform: 'skew(-12deg, 0) translateX(10%)'
    },

    [mq[1]]: {
      width: '80%',
      height: '25rem'
    },

    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },

    '& h4': {
      position: 'absolute',
      ...absCenter,

      fontSize: styleFonts.sizeMedium,
      fontWeight: styleFonts.weightMedium,
      color: styleColors.secondaryLight,
      textShadow: boxShadows.point5,
    }
  }
})

const BigTitleCard = ({ cardTitle }) => (
  <div css={Styles}>
    <div>
      <img src='https://m.ayosemarang.com/images-semarang/post/articles/2020/03/19/53883/ipad-pro-review-featured.jpg' />
      <h4>{ cardTitle }</h4>
    </div>
  </div>
)

export default BigTitleCard;