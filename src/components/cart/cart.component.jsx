// CSS LIBRARIES
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Row, Col, Checkbox, Dropdown, Button, Menu, InputNumber } from 'antd';
import { DownOutlined, DeleteFilled } from '@ant-design/icons';
import { styleSpacing } from '../../styles/utils';

const Styles = ({
  checkbox: css({
    width: '100%'
  }),

  img: css({
    '& img': {
      width: '100%',
      height: '20rem',
      objectFit: 'contain'  
    }
  }),

  details: css({
    position: 'relative',
    paddingLeft: styleSpacing.spacingMedium,

    '& .span': {
      marginRight: styleSpacing.spacingSmall
    },

    '& .condition': {
      marginRight: styleSpacing.spacingMedium
    },

    '& h3': {
      position: 'absolute',
      bottom: '0',
      left: '50'
    },

    '& .trash': {
      position: 'absolute',
      bottom: '1.5rem',
      right: '0'
    }
  })
})

const menu = (
  <Menu>
    <Menu.Item key="1">
      1st menu item
    </Menu.Item>
    <Menu.Item key="2">
      2nd menu item
    </Menu.Item>
    <Menu.Item key="3">
      3rd item
    </Menu.Item>
  </Menu>
);

export const BigCart = () => (
  <Row>
    <Col span={1}><Checkbox css={Styles.checkbox}/></Col>

    {/* Image Product */}
    <Col span={7} css={Styles.img}>
      <img src='https://m.ayosemarang.com/images-semarang/post/articles/2020/03/19/53883/ipad-pro-review-featured.jpg' alt=''/>
    </Col>

    <Col span={15} css={Styles.details}>
      <h2>Ipad Pro 11 inci 2018</h2>

      {/* Cart Actions*/}
      <span className='span'>Kondisi</span>
      <Dropdown overlay={menu} className='condition'>
        <Button>
          Button <DownOutlined />
        </Button>
      </Dropdown>
      
      <span className='span'>Jumlah</span>
      <InputNumber/>

      {/* Price*/}
      <h3>Rp 10.000.000 , 00</h3>

      {/* Delete Button*/}
      <DeleteFilled className='trash'/>
    </Col>
  </Row>
)

export default BigCart;