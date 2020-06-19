// CSS LIBRARIES
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Row, Col, Divider} from 'antd';
import { HeartFilled } from '@ant-design/icons';

import { styleSpacing } from '../../../styles/utils'

const Styles = ({
  imageGrid: css({
    '& h5': {
      marginBottom: styleSpacing.spacingSmall
    },

    '& img': {
      width: '100%',
      height: '15rem',
      objectFit: 'cover'
    }
  }),

  reviews: css({
    paddingLeft: styleSpacing.spacingMedium,

    '& h5': {
      marginBottom: styleSpacing.spacingSmall
    },

    '& .username': {
      marginBottom: '1rem'
    }
    
  })
})

const ProductReviews = () => (
  <div>
    <Row justify="start">

    {/* Review Picture Grid */}
      <Col span={10} css={Styles.imageGrid}>
      <h5>Foto Pelanggan</h5>
        <Row gutter={[24,24]}>
          <Col span={12}>
            <img src='https://m.ayosemarang.com/images-semarang/post/articles/2020/03/19/53883/ipad-pro-review-featured.jpg' alt="dummy"/>
          </Col>
          <Col span={12}>
            <img src='https://m.ayosemarang.com/images-semarang/post/articles/2020/03/19/53883/ipad-pro-review-featured.jpg' alt="dummy"/>
          </Col>
          <Col span={12}>
            <img src='https://m.ayosemarang.com/images-semarang/post/articles/2020/03/19/53883/ipad-pro-review-featured.jpg' alt="dummy"/>
          </Col>
          <Col span={12}>
            <img src='https://m.ayosemarang.com/images-semarang/post/articles/2020/03/19/53883/ipad-pro-review-featured.jpg' alt="dummy"/>
          </Col>
        </Row>
      </Col>

      {/* Reviews from people */}
      <Col span={14} css={Styles.reviews}>

        <h5>Ulasan</h5>
        <div className='username'>@marinamary</div>
        <Row gutter={24}>
          <Col span={20}>
            <p>Barang sampai dengan aman. Sesuai dengan keterangan</p>
          </Col>

          <Col span={4} style={{textAlign: 'right'}}>
            <HeartFilled/>
          </Col>
        </Row>

      </Col>
    </Row>
  </div>
)

export default ProductReviews;