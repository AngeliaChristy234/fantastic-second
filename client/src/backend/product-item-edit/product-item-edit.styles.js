/** @jsx jsx */
import { css } from '@emotion/core';
import { styleColors } from '../../styles/abstracts';
import { styleSpacing } from '../../styles/utils';

const Styles = css({
  padding: '24px',
  minHeight: '360px',

  '& section': {
    marginBottom: styleSpacing.spacingMedium,

    '& img': {
      width: '100%',
      height: '40rem',
      objectFit: 'contain'
    },

    '& h3': {
      marginBottom: styleSpacing.spacingSmall,
      marginTop: styleSpacing.spacingSmall
    },

    '& .select': {
      marginRight: styleSpacing.spacingMedium,
    },

    '& .item-card': {
      position: 'relative',
      padding: styleSpacing.spacingSmall,
      backgroundColor: styleColors.white,
      marginBottom: styleSpacing.spacingSmall,

      '& .makeinline': {
        display: 'inline',
        marginRight: styleSpacing.spacingSmall,
      },

      '& .smallInput': {
        width: '20%',
        marginRight: styleSpacing.spacingSmall
      },

      '& img': {
        display: 'block',
        width: '40%',
        height: '15rem',
        border: 'Gainsboro 1px solid',
        marginRight: styleSpacing.spacingSmall
      },

      '& .imgbtn': {
        width: '40%',
        marginBottom: styleSpacing.spacingSmall
      },

      '& .uploadImg': {
        float: 'right',
        display: 'block'
      },

      '& .delbtn': {
        position: 'absolute',
        right: styleSpacing.spacingSmall,
        top: styleSpacing.spacingSmall
      }
    }
  }
})

export default Styles;