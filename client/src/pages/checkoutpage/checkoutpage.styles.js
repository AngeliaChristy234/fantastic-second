import { css } from '@emotion/core';
import { styleColors } from '../../styles/abstracts';
import { styleSpacing } from '../../styles/utils';

const Styles = ({
  container: css({
    padding: '0 20rem',
    marginTop: styleSpacing.spacingBig
  }),

  cart: css({
    marginTop: styleSpacing.spacingMega,

    '& .right': {
      textAlign: 'right'
    }
  }),

  reviews: css({
    marginTop: styleSpacing.spacingMedium,

    '& h5': {
      marginBottom: styleSpacing.spacingSmall,
      textAlign: 'center'
    },

    '& .card': {
      backgroundColor: styleColors.secondaryLight
    },

    '& ol': {
      paddingLeft: '0'
    },

    '& .right': {
      textAlign: 'right'
    }
  }),

  shipping: css({
    marginTop: styleSpacing.spacingMedium,
    marginBottom: styleSpacing.spacingBig,

    '& button': {
      marginRight: styleSpacing.spacingSmall,
      padding: styleSpacing.spacingSmall,
      height: '10rem',
      backgroundColor: styleColors.white,
      border: 'none',

      '& img': {
        height: '100%'
      }
    }
  })
})

export default Styles;