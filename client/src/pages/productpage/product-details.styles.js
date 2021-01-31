import { css } from '@emotion/core';
import { boxShadows } from '../../styles/abstracts';
import { mq, styleSpacing } from '../../styles/utils';

const DetailStyles = ({
  images: css({ 
      marginBottom: styleSpacing.spacingMedium,
      height: '40rem',
      boxShadow: boxShadows.point5,
  
      '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'contain'
      }
    
  }),

  details: css({
    marginLeft: styleSpacing.spacingMedium,
    [mq[0]]: {
      marginLeft: '0'
    },
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

export default DetailStyles;