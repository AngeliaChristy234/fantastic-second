import { css } from '@emotion/core';
import { styleColors, boxShadows } from '../../styles/abstracts';

const Styles = ({
  container: css({
    position: 'fixed',
    zIndex: '99',
    top: '0',
    left: '0',
    width: '100%',
    padding: '2rem',
    backgroundColor: styleColors.white,
    boxShadow: boxShadows.point8
  }),

  logo: css({
    width: '90%'
  }),

  nav: css({
    marginTop: '1rem'
  }),

  kategori: css({
    margin: '0 3rem 0 8rem'
  }),
  
  searchBar: css({
    width: '60%'
  }),

  icon: css({
    float: 'right',
    margin: '0 1rem'
  }),

  button: css({
    float: 'right',
    margin: '0 1rem'
  })

})

export default Styles;