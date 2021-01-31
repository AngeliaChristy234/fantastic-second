import { css } from '@emotion/core';
import { styleColors, styleFonts, boxShadows } from '../../styles/abstracts';
import { absCenterX, mq, pagePadding, styleSpacing } from '../../styles/utils';

const Styles = ({
  container: css({
    '& section': {
      marginTop: styleSpacing.spacingBig,
      ...pagePadding,

      '& h3': {
        fontSize: styleFonts.sizeMedium,
        fontWeight: styleFonts.weightDefault,

        marginBottom: styleSpacing.spacingMedium
      },

      '& .heading': {
        textAlign: 'center'
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
    marginTop: '0 !important',

    '& .carousel': {
      height: '60vh'
    },

    '& img': {
      position: 'absolute',
      width: '100vw',
      height: '100%',
      objectFit: 'cover'
    },

    '& h2': {
      position: 'absolute',
      right: '20rem',
      bottom: '5rem',
      color: styleColors.white,
      fontsize: styleFonts.sizeHuge,
      fontSize: '6rem',
      textShadow: boxShadows.point8,

      [mq[0]]: {
        textAlign: 'Left',
        top: '0',
        left: '0',
        transform: 'translate(25%, 0)'
      },

      '& span': {
        display: 'block'
      }
    }
  }),

  newItems: css({
    '& .link': {
      textAlign: 'center',
      textDecoration: 'underline',
      cursor: 'pointer',
      color: styleColors.primaryDark,
      transition: 'all .5s ease', 

      '&:hover': {
        transform: 'translateY(-0.3rem)',
        textShadow: boxShadows.point8,
      }
    }
  }),

  reasonsWhy: css({
    '& > *': {
      '&:not(:last-child)': {
        height: '40vh'
      },

      '[class*="left"]': {
        padding: '0 0 0 20rem',
        height: '100%',

        [mq[0]]: {
          padding: '0'
        }
      },

      '[class*="right"]': {
        padding: '0 20rem 0 0',
        height: '100%',
        textAlign: 'right',

        [mq[0]]: {
          padding: '0'
        }
      },


    },

    '& .left-1, & .right-2': {
      backgroundColor: styleColors.primaryLight,
      fontSize: styleFonts.sizeMedium,
      overflow: 'overlay',

      [mq[0]]: {
        '& h2': {
          fontsize: styleFonts.sizeSmall
        }
      },

      '& div': {
        float: 'right',
        height: '100%',
        width: '100%',
        padding: styleSpacing.spacingSmall,
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
      padding: styleSpacing.spacingSmall
    },

    '& .right-3': {
      backgroundColor: styleColors.primaryDark,
      height: '35vh',
      padding: styleSpacing.spacingSmall,

      '& img': {
        width: '30%',
        marginTop: '-2rem'
      },

      [mq[0]]: {
        textAlign: 'left',

        '& img': {
          width: 'auto',
          height: '15rem',
          marginTop: '-3rem',
          marginLeft: '50%',
          transform: 'translateX(-50%)'
        },
      },
    }
  })
})

export default Styles;