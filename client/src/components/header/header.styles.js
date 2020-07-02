import { css } from '@emotion/core';
import { styleColors, boxShadows } from '../../styles/abstracts';
import { mq, styleSpacing } from '../../styles/utils';

const Styles = ({
  container: css({
    position: 'fixed',
    zIndex: '99',
    top: '0',
    left: '0',
    width: '100vw',
    height: styleSpacing.spacingBig,
    padding: '2rem',
    backgroundColor: styleColors.white,
    boxShadow: boxShadows.point8
  }),

  logo: css({
    width: '90%',
    cursor: 'pointer'
  }),

  nav: css({
    marginTop: '1rem'
  }),

  kategori: css({
    margin: '0',
    border: 'none',
    width: '100%',

    '& .ant-menu-submenu-title': {
      margin: '0'
    }
  }),
  
  searchBar: css({
    width: '100%'
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