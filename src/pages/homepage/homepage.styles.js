import { css } from '@emotion/core';
import { styleColors, styleFonts } from '../../styles/abstracts';
import { styleSpacing } from '../../styles/utils';

const Styles = ({
  container: css({
    '& section': {
      marginTop: styleSpacing.spacingBig,
      padding: '0 20rem',

      '& h3': {
        fontSize: styleFonts.sizeMedium,
        fontWeight: styleFonts.weightDefault,

        marginBottom: styleSpacing.spacingMedium
      }
    },

    '& .why': {
      padding: '0'
    }
  }),

  banner: css({
    position: 'relative',
    height: '60vh',
    padding: '0 !important',

    '& img': {
      position: 'absolute',
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },

    '& h2': {
      color: styleColors.primaryLight,
      position: 'absolute',
      right: '20rem',
      bottom: '5rem',
      fontsize: styleFonts.sizeHuge,
      fontSize: '6rem',

      '& span': {
        display: 'block'
      }
    }
  }),

  newItems: css({

    '& .link': {
      textDecoration: 'underline'
    }
  }),

  reasonsWhy: css({
    '& > *': {
      '&:not(:last-child)': {
        height: '40vh'
      },

      '[class*="left"]': {
        padding: '0 0 0 20rem',
        height: '100%'
      },

      '[class*="right"]': {
        padding: '0 20rem 0 0',
        height: '100%',
        textAlign: 'right'
      }
    },

    '& .left-1, & .right-2': {
      backgroundColor: styleColors.primaryLight,
      fontSize: styleFonts.sizeMedium,

      '& div': {
        float: 'right',
        height: '100%',
        width: '100%',
        backgroundColor: styleColors.white
      }
    },

    '& .right-1, & .left-2': {
      backgroundColor: styleColors.primaryDark,

      '& img': {
        objectFit: 'cover',
        height: '100%',
        width: '100%'
      }
    },

    '& .left-3': {
      backgroundColor: styleColors.primaryLight,
      height: '35vh',
      paddingTop: '3rem'
    },

    '& .right-3': {
      backgroundColor: styleColors.primaryDark,
      height: '35vh',
      paddingTop: '3rem',

      '& img': {
        width: '30%',
        marginTop: '-2rem'
      }
    }
  })
})

export default Styles;