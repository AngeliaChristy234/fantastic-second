// CSS LIBRARIES
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Row, Col, Divider} from 'antd';
import { styleFonts } from '../../../styles/abstracts';
import { styleSpacing } from '../../../styles/utils';

const Styles = ({
  condition: css({
    textAlign: 'center',

    '& h2': {
      fontSize: styleFonts.sizeHuge
    }
  }),

  description: css({
    paddingLeft: styleSpacing.spacingMedium,

    '& .hr': {
      width: '90%',
      minWidth: '0'
    }
  })
})

const ProductDescription = () => (
  <div>
    <Row justify="start">

      <Col span={10} css={Styles.condition}>
        <h5>kondisi</h5>
        <h2>80%</h2>
      </Col>

      <Col span={14} css={Styles.description}>
        <Row>
          <Col span={12}>
            <h5>Kelebihan item</h5>
            <Divider className='hr'/>
            <li>tidak ada bend</li>
            <li>layar mulus</li>
            <li>sudah termasuk screen protector</li>
          </Col>
          <Col span={12}>
            <h5>Kelebihan item</h5>
            <Divider className='hr'/>
            <li>scratch sedikit pada keyboard</li>
            <li>hanya 2 thunderbolt yang bekerja</li>
          </Col>
        </Row>
      </Col>

    </Row>
  </div>
)

export default ProductDescription;