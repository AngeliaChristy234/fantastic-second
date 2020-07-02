/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { styleColors } from '../../styles/abstracts';
import { styleSpacing } from '../../styles/utils';
import { Row, Col, Input, Button, InputNumber, Upload, message} from 'antd'
import { UploadOutlined } from '@ant-design/icons';

import React from 'react';
import axios from 'axios';

const { TextArea } = Input

const Styles = css({
  position: 'relative',
  padding: styleSpacing.spacingSmall,
  backgroundColor: styleColors.white,
  marginBottom: styleSpacing.spacingSmall,

  '& .makeinline': {
    display: 'inline',
    marginRight: styleSpacing.spacingSmall,
  },

  '& .smallInput': {
    width: '20%',
    marginRight: styleSpacing.spacingSmall
  },

  '& .imgs': {
    display: 'block',
    width: '40%',
    height: '15rem',
    border: 'Gainsboro 1px solid',
    marginRight: styleSpacing.spacingSmall
  },

  '& .imgbtn': {
    width: '40%',
    marginBottom: styleSpacing.spacingSmall
  },

  '& .uploadImg': {
    float: 'right',
    display: 'block'
  },

  '& .delbtn': {
    float: 'right'
  }
})

class InputCardItem extends React.Component {

  constructor(props) {
    super(props)
    this.handleAddItem = this.handleAddItem.bind(this)
    this.handlePostUpdate = this.handlePostUpdate.bind(this)
    this.handleDelete = this.handleDelete.bind(this)

    const { item_id, product_id, condition, good, bad, price, stocklevel, item_images, addNew } = props.item
    
    this.state = {
      item_id,
      product_id,
      condition,
      good,
      bad,
      price,
      stocklevel,
      item_images,

      addNew
    }
  }

  handleAddItem() {
    const { product_id, condition, good, bad, price, stocklevel, item_images } = this.state

    if ((condition && good && bad && price && stocklevel) !== '') {
      const obj = { product_id, condition, good, bad, price, stocklevel, item_images }
 
      axios.post('/api/add-item', obj)
      .then( res => {
        return message.loading('menambahkan..') 
      })
      .then( res => {
        const refresh = window.location.reload(false);
        refresh()
      })
      .catch( err => {
        console.log(err)
        return message.error('gagal')
      })
    }

    return message.error('isi data terlebih dahulu')
  }

  handlePostUpdate() {
    const { item_id, condition, good, bad, price, stocklevel, item_images } = this.state,
          obj = { item_id, condition, good, bad, price, stocklevel, item_images }

    axios.post('/api/update-item', obj)
      .then( res => {
        return message.loading('sedang diganti') 
      })
      .then( res => {
        const refresh = window.location.reload(false);
        refresh()
      })
      .catch( err => {
        console.log(err)
        return message.error('gagal')
      })
  }

  handleDelete() {
    axios.post('/api/delete-item', {item_id: this.state.item_id})
      .then( res => {
        return message.loading('menghapus') 
      })
      .then( res => {
        const refresh = window.location.reload(false);
        refresh()
      })
      .catch( err => {
        console.log(err)
        return message.error('gagal')
      })
  }

  renderImageGrid () {
    console.log(this.state);
    
    const { item_images } = this.state

    if (item_images) {
      let imageArray = item_images.split(', ')

      return imageArray.map( e => (
        <div>
          <img src={e} className='imgs'/>
          <Button className='imgbtn' danger>Del Img</Button>
        </div>
      ))
    }

    return null;
  }
  
  render(){
    const { item_id, condition, good, bad, price, stocklevel, addNew} = this.state

    return(
      <Row gutter={32} className='item-card' css={Styles}>
        <Col span={10}>
          <Upload className='uploadImg'><Button><UploadOutlined/></Button></Upload>
          {
            (addNew)
            ? null
            : this.renderImageGrid()
          }
        </Col>
        <Col span={14}>
          {
            (addNew)
            ? null
            : <Button
                type="primary"
                shape="circle"
                danger
                className='delbtn' 
                onClick={this.handleDelete}
              >X</Button>
          }

          <h3>Item ID: {item_id}</h3>
          <h3>Price:</h3>
          <Input
            placeholder='masukan angka saja'
            style={{marginBottom: '2rem'}}
            onChange={e => this.setState({price: e.target.value})}
            value={price}
          />
          <h3 className='makeinline'>Condition:</h3>
          <Input
            value={condition}
            placeholder='masukan angka dengan %'
            className='smallInput'
            onChange={e => this.setState({condition: e.target.value})}
          />
          <h3 className='makeinline'>Stock:</h3>
          <InputNumber
            defaultValue={stocklevel}
            min={1}
            onChange={e => this.setState({stocklevel: e})}
          />
          <h3>Good:</h3>
          <TextArea
            value={good}
            placeholder='pisahkan poin dengan ,'
            onChange={e => this.setState({good: e.target.value})}
          />
          <h3>Bad:</h3>
          <TextArea
            value={bad}
            placeholder='pisahkan poin dengan ,'
            onChange={e => this.setState({bad: e.target.value})}
          />
        </Col>
        {
          (addNew)
          ? <Button type="primary" onClick={this.handleAddItem}>Save</Button>
          : <Button type="primary" onClick={this.handlePostUpdate}>Save</Button>
        }
      </Row>
    )
  }
}

export default InputCardItem;