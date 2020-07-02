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
    }
  }
})

export default Styles;