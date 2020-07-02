/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { styleSpacing } from '../../styles/utils';

const Styles = css({
  padding: '24px',
  minHeight: '360px',

  '& section': {
    marginBottom: styleSpacing.spacingMedium,

    '& h2': {
      marginBottom: styleSpacing.spacingSmall
    }
  }

})

export default Styles;