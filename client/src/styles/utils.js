export const absCenter = ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
})

const breakpoints = [37.5, 56.25, 74]
export const mq = breakpoints.map( bp => `@media (max-width: ${bp}em)`)

export const styleSpacing = ({
  spacingSmall: '2rem',
  spacingMedium: '4rem',
  spacingBig: '8rem',
  spacingMega: '15rem',
  spacingHuge: '20rem'
})