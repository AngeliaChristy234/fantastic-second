/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Layout, Row, Col, Input, Button, Select, Table, Card, message, Space } from 'antd';
import { styleSpacing } from '../../styles/utils';

import React from 'react';
import axios from 'axios';

const { Option } = Select;

const Styles = css({
  '& input': {
    marginBottom: styleSpacing.spacingSmall
  },

  '& .select': {
    marginBottom: styleSpacing.spacingSmall,
    marginRight: styleSpacing.spacingSmall
  },

  '& button': {
    float: 'right'
  }
})

class InputCardProduct extends React.Component {
  constructor() {
    super()
    this.fetchCategories = this.fetchCategories.bind(this)
    this.fetchSubCategories = this.fetchSubCategories.bind(this)
    this.handleAddProduct = this.handleAddProduct.bind(this)

    this.state = {
      categories: [],
      subcats: [],

      currentCatId: 0,

      name: '',
      category_sub_id: 0,
      image: '',
      tokopedia: ''
    }
  }

  fetchCategories() {
    const state = this;
    axios.get('/api/categories')
      .then( res => {
        state.setState({categories: res.data})
      })
      .catch(err => console.log(err))
  }

  fetchSubCategories() {
    const state = this;
    axios.get('/api/categories_sub')
      .then( res => {
        state.setState({subcats: res.data})
      })
      .catch(err => {
        console.log(err)
      })
  }

  componentDidMount() {
    this.fetchCategories()
    this.fetchSubCategories()
  }

  handleAddProduct() {
    const { name, category_sub_id, image, tokopedia } = this.state

    if ((name && category_sub_id) !== ''){
      const obj = { name, category_sub_id, image, tokopedia }

      return axios.post('/api/add-product', obj)
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

    return message.error('Isi nama, kategori dan sub kategori terlebih dahulu')
  }

  renderSubCat() {
    const { subcats, currentCatId } = this.state;

    const allSubCat = subcats.filter(e => e.category_id === currentCatId)
  
    return allSubCat.map( e => (
      <Option value={e.id}>{e.name}</Option>
    ))
  }

  render() {
    const { categories, currentCatId } = this.state
    return(
      <Card css={Styles}>
        <h4>Nama produk:</h4>
        <Input placeholder='Masukan nama produk' onChange={e => this.setState({name: e.target.value})}/>
        <Select className='select' defaultValue='kategori' onChange={val => this.setState({currentCatId: val})}>
          {
            categories.map(e => (
              <Option value={e.id}>{e.name}</Option>
            ))
          }
        </Select>

        {
          (currentCatId === 0)
          ? <Select className='select' defaultValue='sub kategori' disabled/> 
          : <Select className='select' defaultValue='sub kategori' onChange={val => this.setState({category_sub_id: val})}>
              {this.renderSubCat()}
            </Select>
        }   

        <h4>Link Tokopedia:</h4>
        <Input placeholder='Masukan link tokopedia' onChange={e => this.setState({tokopedia: e.target.value})}/>
        <Button type='primary' onClick={this.handleAddProduct
        }>Tambah produk</Button>
      </Card>
    )
  }
}

export default InputCardProduct;