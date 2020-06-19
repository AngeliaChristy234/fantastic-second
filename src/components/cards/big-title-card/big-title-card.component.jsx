/** @jsx jsx */
import { jsx, css } from '@emotion/core';

// STYLES
import { styleFonts, boxShadows } from '../../../styles/abstracts';

const Styles = css({

  '& div': {
    position: 'relative',
    backgroundImage: 'url("https://m.ayosemarang.com/images-semarang/post/articles/2020/03/19/53883/ipad-pro-review-featured.jpg")',
    backgroundSize:'cover',
    filter: 'blur(0.5px)',
    transform: 'skew(-15deg, 0)',
    width:'100%',
    height: '30rem',
    boxShadow: boxShadows.point8,
    display: 'inline-block',
    textAlign: 'center',

    '& span': {
      margin: '0 auto',
      fontSize: styleFonts.sizeMedium,
      fontWeight: styleFonts.weightBold,
      filter: 'blur(0)'
    }
  }
})

const BigTitleCard = ({ cardTitle }) => (
  <div css={Styles}>
    <div>
      <span>{ cardTitle }</span>
    </div>
  </div>
)

export default BigTitleCard;