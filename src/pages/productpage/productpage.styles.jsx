import { css } from '@emotion/core';
import { styleSpacing } from '../../styles/utils';

const Styles = ({
  container: css({
    marginTop: styleSpacing.spacingBig,
    padding: '0 20rem'
  }),

  details: css({
    marginTop: styleSpacing.spacingMega
  }),

  description: css({
    marginTop: styleSpacing.spacingMedium,
  }),

  related: css({
    marginTop: styleSpacing.spacingMedium,
    marginBottom: styleSpacing.spacingMedium,

    '& h5': {
      marginBottom: styleSpacing.spacingMedium
    }
  })

})

export default Styles;