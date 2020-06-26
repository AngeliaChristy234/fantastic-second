import { css } from '@emotion/core';
import { styleColors, boxShadows } from '../../styles/abstracts';
import { styleSpacing } from '../../styles/utils';

const DetailStyles = ({
  images: css({ 
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