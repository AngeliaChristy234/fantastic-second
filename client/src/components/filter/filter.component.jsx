/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Row, Col, Button } from 'antd';

import { styleSpacing } from '../../styles/utils';

// import React from 'react';

const Styles = css({
  marginTop: styleSpacing.spacingSmall,
  textAlign: 'center'
})

const Filters = () => (
  <Row gutter={{ sm: 40, lg: 400 }} css={Styles}>
    <Col xs={24} sm={12}>
      <h5>Kondisi</h5>
      <Row justify="space-between" className="gutter-row">
        <Col span={6}><Button size='middle'>90%</Button></Col>
        <Col span={6}><Button size='middle'>70%</Button></Col>
        <Col span={6}><Button size='middle'>50%</Button></Col>
        <Col span={6}><Button size='middle'>20%</Button></Col>
      </Row>
    </Col>

    <Col xs={24} sm={12}>
      <h5>Harga</h5>
      <Row justify="space-between" className="gutter-row">
        <Col span={6}><Button size='middle'>12jt</Button></Col>
        <Col span={6}><Button size='middle'>10jt</Button></Col>
        <Col span={6}><Button size='middle'>8jt</Button></Col>
        <Col span={6}><Button size='middle'>4jt</Button></Col>
      </Row>      
    </Col>
  </Row>
)

export default Filters;