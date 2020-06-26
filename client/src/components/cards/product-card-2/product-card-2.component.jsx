import TokopediaLogo from '../../../assets/img/Tokopedia.png';

/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Row, Col, Carousel, Button} from 'antd';

// STYLES
import { styleColors } from '../../../styles/abstracts';
import { styleSpacing } from '../../../styles/utils'

// PACKAGES
import React from 'react';

const Styles = css({
  width: '100%',
  border: '0.1px solid',
  borderColor: 'rgba(0, 0, 0, 0.4)',
  

  '& img': {
    marginBottom: styleSpacing.spacingSmall,
    width: '100%',
    height: '30%',
    objectFit: 'cover'
  },

  '& .good_bad': {
    padding: '0 ' + styleSpacing.spacingSmall,

    '& ul': {
      listStyle: 'none',
      padding: '0'
    }
  },

  '& .row': {
    padding: '0 ' + styleSpacing.spacingSmall,
    marginTop: styleSpacing.spacingMedium,
    marginBottom: styleSpacing.spacingSmall,

    '& .right': {
      textAlign: 'right'
    }
  },

  '& button': {
    width: '100%',
    color: styleColors.white,
    backgroundColor: '#4F9D4D',

    '& img':{
      float: 'right',
      width: '30%',
      height: '120%',
      objectFit: 'contain',
      margin: '-0.2rem -0.1rem 0 0'
    }
  }

})

const ProductCard_2 = ({item, rupiah}) => {
  const { item_images, good, bad, condition } = item

  return (
    <div css={Styles}>
      <Carousel>
        {
          item_images.split(", ").map(image => (
            <img src={image} alt=""/>
          ))
        }
      </Carousel>

      <div className='good_bad'>
        <h4>Good</h4>
        <ul>
          {
            good.split(", ").map(goods => (
              <li>{goods}</li>
            ))
          }
        </ul>
        <h4>Bad</h4>
        <ul>
          {
            bad.split(", ").map(bads => (
              <li>{bads}</li>
            ))
          }
        </ul>
      </div>

      <Row className='row'>
        <Col span={8} className='left'>
          <span>Kondisi</span>
          <h2>{condition}</h2>
        </Col>
        <Col span={16} className='right'>
          <span>Harga</span>
          <h4>Rp { rupiah }</h4>
        </Col>
      </Row>

      <Button size='large'>Tokopedia <img src={TokopediaLogo} alt='tokopedia'/></Button>
    </div>
  )
}


export default ProductCard_2;