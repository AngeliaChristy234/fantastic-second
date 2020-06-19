import { css } from '@emotion/core';
import { styleColors, boxShadows } from '../../../styles/abstracts';
import { styleSpacing } from '../../../styles/utils';

const Styles = ({
  images: css({
    
    '& .display': {
      height: '40rem',
      boxShadow: boxShadows.point5,
  
      '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'contain'
      }
    },

    '& .imgBtn': {
      display: 'inline-block',
      marginTop: styleSpacing.spacingSmall,

      '& button': {
        padding: '0',
        width: '25%',
        height: '10rem',
        border: 'none',
        backgroundColor: styleColors.white,
        boxShadow: boxShadows.point5,
        marginRight: styleSpacing.spacingSmall,

        '& img': {
          width: '100%',
          height: '100%',
          objectFit: 'contain'
        }
      }
    }
  }),

  details: css({
    marginLeft: styleSpacing.spacingMedium,
    '& .quality': {

      '& h5': {
        marginBottom: styleSpacing.spacingSmall
      },

      '& button': {
        marginBottom: styleSpacing.spacingSmall,
        marginRight: styleSpacing.spacingSmall
      }
    },

    '& .buy': {
      marginTop: styleSpacing.spacingSmall,

      '& .input, & button': {
        display: 'block',
        marginRight: styleSpacing.spacingSmall,
        marginBottom: '1rem'
      },

      '& img': {
        marginTop: styleSpacing.spacingSmall,
        width: '80%'
      }
    }
  })
})

export  default Styles;