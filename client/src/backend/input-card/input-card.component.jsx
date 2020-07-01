/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import { Card, Input, Select, Upload, Button, message } from 'antd';
import { styleSpacing } from '../../styles/utils';

import React from 'react';
import axios from 'axios';

const { Option } = Select;

const Styles = css({
  width: '100%',
  marginBottom: styleSpacing.spacingMedium,

  '& img': {
    padding: '1rem',
    width: '100%',
    objectFit: 'contain',
    border: 'Gainsboro 1px solid',
  },

  '& .upload': {
    marginBottom: styleSpacing.spacingSmall
  },

  '& .select': {
    width: '40%',
    margin: '2rem 5% 2rem 0'
  }

})

class InputCard extends React.Component {
  constructor(props) {
    super(props)
    this.fetchCategories = this.fetchCategories.bind(this)
    this.fetchSubCategories = this.fetchSubCategories.bind(this)
    this.handleCategoryChange =  this.handleCategoryChange.bind(this)
    this.handleSubcatChange =  this.handleSubcatChange.bind(this)
    this.handlePostUpdate = this.handlePostUpdate.bind(this)

    this.state = {
      productId: this.props.productId,
      name: this.props.name,
      category: this.props.category,
      subcatId: this.props.subcatId,
      subcat: this.props.subcat,
      image: this.props.image,
      tokopedia: this.props.tokopedia,

      categories: [],
      subcats: [],

      currentCatId: 0
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

  handleCategoryChange(val) {
    this.setState({category: val, subcat: '', currentCatId: val})
  }

  handleSubcatChange(val) {
    this.setState({subcat: val})
  }

  renderSubCat(subcatId) {
    const { subcats, currentCatId } = this.state

    if(currentCatId === 0) {
      const objWithTheCat = subcats.find(e => e.id === subcatId),
            allSubCat = subcats.filter(e => e.category_id === objWithTheCat.category_id)

      return allSubCat.map( e => (
        <Option value={e.id}>{e.name}</Option>
      ))
    }

    const allSubCat = subcats.filter(e => e.category_id === currentCatId)
  
    return allSubCat.map( e => (
      <Option value={e.id}>{e.name}</Option>
    ))

  }

  handlePostUpdate() {
    const { productId, name, subcatId, image, tokopedia } = this.state

    const obj = {
      id: productId,
      name,
      category_sub_id: subcatId,
      image,
      tokopedia
    }

    axios.post('/api/update-product', obj)
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

  render() {
    const { name, category, subcat, tokopedia, image, subcatId } = this.state
    const { categories, subcats } = this.state

    return (
      <Card
        css= {Styles}
        actions={[<span onClick={this.handlePostUpdate}>Simpan</span>]}
      >
        <img
          alt="example"
          src={image} 
        />
        <Button onClick={() => console.log(this.state)}>Edit</Button>
        <Upload className='upload'>
          <Button>Click to upload</Button>
        </Upload>
        <Input
          placeholder='Beri nama product'
          onChange={e => this.setState({name: e.target.value}) }
          value={name}
        />
        <Select className='select' defaultValue={category} onChange={this.handleCategoryChange}>
          {
            categories.map(e => (
              <Option value={e.id}>{e.name}</Option>
            ))
          }
        </Select>
        <Select className='select' defaultValue={subcat} onChange={this.handleSubcatChange}>
          { this.renderSubCat(subcatId) }
        </Select>
        <Input
          placeholder='Link tokopedia'
          onChange={e => this.setState({tokopedia: e.target.value}) }
          value={tokopedia}/>
      </Card>
    )
  }
}

export default InputCard;