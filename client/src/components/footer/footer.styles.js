import { css } from '@emotion/core';
import { styleColors, styleFonts } from '../../styles/abstracts';
import { absCenter, absCenterX, mq, styleSpacing } from '../../styles/utils';

const Styles = ({
  container: css({
    backgroundColor: styleColors.secondaryDark,
    color: styleColors.secondaryLight,
    position: 'relative',
    paddingTop: '8rem',
    paddingRight: styleSpacing.spacingHuge,
    paddingLeft: styleSpacing.spacingHuge,
    height: '45vh',

    '& h5': {
      cursor: 'pointer',
      color: styleColors.secondaryLight
    },

    [mq[0]]: {
      height: 'auto'
    },

    [mq[1]]: {
      padding: '4rem 1.5rem'
    }
  }),

  logo: css({
    ...absCenter,
    width: '20%',
    
    [mq[0]]: {
      position: 'relative',
      ...absCenterX,
      width: '50%',
      marginBottom: styleSpacing.spacingMedium
    }
  }),

  about: css({
    float: 'left',

    '& > *': {
      display: 'block',
      fontWeight: styleFonts.weightLight
    },

    [mq[0]]: {
      position: 'relative',
      float: 'none',
    }
  }),

  contact: css({
    float: 'right',

    '& > *': {
      display: 'block',
      textAlign: 'right',
      fontWeight: styleFonts.weightLight
    },

    [mq[0]]: {
      position: 'relative',
      float: 'none',
      marginTop: styleSpacing.spacingSmall,
      
      '& > *': {
        textAlign: 'left'
      }
    }
  }),

  miniHeading: css({
    marginTop: styleSpacing.spacingSmall,
    fontWeight: styleFonts.weightDefault
  }),

})

export default Styles;