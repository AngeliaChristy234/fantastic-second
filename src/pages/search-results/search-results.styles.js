import { css } from '@emotion/core';
import { styleColors, styleFonts } from '../../styles/abstracts';
import { styleSpacing } from '../../styles/utils';

const Styles = ({

  container: css({
    marginTop: styleSpacing.spacingBig,

    '& section': {
      padding: '0 20rem'
    }
  }),

  topPart: css({
    marginTop: styleSpacing.spacingMega,

    '& h4': {
      textAlign: 'center'
    }

  }),

  searchResults: css({
    marginTop: styleSpacing.spacingMedium
  }),

  relatedProducts: css({
    marginTop: styleSpacing.spacingMedium,
    marginBottom: styleSpacing.spacingBig,

    '& h4': {
      marginBottom: styleSpacing.spacingMedium
    }
  })
})

export default Styles;