import { css } from '@emotion/core';
import { styleColors, styleFonts } from '../../styles/abstracts';
import { styleSpacing, absCenter } from '../../styles/utils';

const Styles = ({
  container: css({
    backgroundColor: styleColors.secondaryDark,
    color: styleColors.secondaryLight,
    position: 'relative',
    paddingTop: '8rem',
    paddingRight: styleSpacing.spacingHuge,
    paddingLeft: styleSpacing.spacingHuge,
    height: '45vh'
  }),

  logo: (absCenter),

  about: css`
    float: left;

    > * {
      display: block;
      font-weight: 100;
    }
  `, 

  contact: css`
    float: right;

    > * {
      display: block;
      text-align: right;
      font-weight: 100;
    }
  `,

  miniHeading: css({
    marginTop: styleSpacing.spacingSmall,
    fontWeight: styleFonts.weightDefault
  }),

})

export default Styles;