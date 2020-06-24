import { css } from '@emotion/core';

export const styleSpacing = ({
  spacingSmall: '2rem',
  spacingMedium: '4rem',
  spacingBig: '8rem',
  spacingMega: '15rem',
  spacingHuge: '20rem'
})

export const absCenter = css({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
})