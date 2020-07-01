/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Layout, Row, Col, Input, Select, Upload, Button, InputNumber, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import React from 'react';
import axios from 'axios';

import Navigation from '../navigation/navigation.component';
import Styles from './product-item-edit.styles';

const { Option } = Select,
      { TextArea } = Input


class EditProductItem extends React.Component {
  constructor(props) {
    super(props)
    this.fetchCategories = this.fetchCategories.bind(this)
    this.fetchSubCategories = this.fetchSubCategories.bind(this)
    this.renderItemCard = this.renderItemCard.bind(this)
    this.handleCategoryChange =  this.handleCategoryChange.bind(this)
    this.handlePostUpdateProduct = this.handlePostUpdateProduct.bind(this)

    this.state = {
      categories: [],
      subcats: [],

      productId: Number(this.props.match.params.productId),
      items: [],
      name: '',
      productImage: '',
      condition: [],
      lowestprice: 0,
      highestPrice: 0,
      totalStock: 0,
      tokopedia: '',

      currentCat: this.props.match.params.cat,
      currentSubcat: this.props.match.params.subcat,
      newSubcatId: 0
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

    const state = this
    axios.post('/api/product-to-view', { id: this.state.productId })
    .then(function (response) {
      const items = response.data,
            name = items.map( i => i.name)[0],
            productImage = items.map( i => i.image)[0],
            price = items.map(i => i.price).sort(),
            tokopedia = items.map(i => i.tokopedia)[0],
            lowestprice = price.pop(),
            highestPrice = price[0],
            stockarr = items.map(i => i.stocklevel),
            totalStock = stockarr.reduce((a, b) => a + b, 0)

      state.setState({ items, name, productImage, tokopedia, lowestprice, highestPrice, totalStock })
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  handleCategoryChange(val) {
    this.setState({currentCat: val, currentSubcat: ''})
  }

  handlePostUpdateProduct() {
    const { productId, name, newSubcatId, productImage, tokopedia } = this.state

    if (newSubcatId !== 0) {
      const obj = {
        id: productId,
        name,
        category_sub_id: newSubcatId,
        image: productImage,
        tokopedia
      }
  
      axios.post('/api/update-product', obj)
        .then( res => {
          return message.loading('sedang diganti') 
        })
        .then( res => {
          const refresh = window.location.href = '/admin/product';
          refresh()
        })
        .catch( err => {
          console.log(err)
          return message.error('gagal')
        })
    }

    return message.error('Belum ada perubahan')
  }

  renderSubCat(subcatName) {
    const { subcats, currentCat } = this.state

    if(subcatName !== '' ) {
      const theSubcat = subcats.find(e => e.name === subcatName),
      relatedSubcats = subcats.filter( e => e.category_id === theSubcat.category_id)

      return relatedSubcats.map( e => (
        <Option value={e.id}>{e.name}</Option>
      ))
    }

    const relatedSubcats = subcats.filter(e => e.category_id === currentCat)

    return relatedSubcats.map( e => (
      <Option value={e.id}>{e.name}</Option>
    ))
  }

  renderItemCard(i) {
    let imageArray = i.item_images.split(', ')
    
    const imageGrid = imageArray.map( e => (
      <div>
        <img src={e}/>
        <Button className='imgbtn' danger>Del Img</Button>
      </div>
    ))
    
    return (
      <Row gutter={32} className='item-card'>
      <Button type="primary" shape="circle" className='delbtn'>X</Button>
        <Col span={10}>
          <Upload className='uploadImg'><Button type='primary'><UploadOutlined/></Button></Upload>{imageGrid}
        </Col>
        <Col span={14}>
          <h3>Item ID: {i.item_id}</h3>
          <h3 className='makeinline'>Condition:</h3>
          <Input value={i.condition} placeholder='masukan angka dengan %' className='smallInput'/>
          <h3 className='makeinline'>Stock:</h3>
          <InputNumber defaultValue={i.stocklevel} min={1} />
          <h3>Good:</h3>
          <TextArea value={i.good} placeholder='pisahkan poin dengan ,'/>
          <h3>Bad:</h3>
          <TextArea value={i.bad} placeholder='pisahkan poin dengan ,'/>
        </Col>
      </Row>
    )
  }

  render() {
    const {
      categories, currentCat, currentSubcat,
      productId, items, name, productImage, tokopedia, lowestprice, highestPrice, totalStock
    } = this.state

    return (
      <Layout style={{ minHeight: '100vh'}}>
        <Navigation openKeys='2'/>

        <Layout className="site-layout">
          <div className="site-layout-background" css={Styles}>
      <button onClick={() => {
        this.handlePostUpdateProduct()
        console.log(this.state)}} >Save</button>
            <section>
              <Row gutter={[32, 12]}>

                <Col span={12}>
                  <img src={productImage}/>
                  <Upload>
                    <Button><UploadOutlined/> change</Button>
                  </Upload>
                </Col>

                <Col span={12}>
                  <h3>Product id: {productId}</h3>
                  <Input
                    placeholder='Beri nama product'
                    onChange={ e => this.setState({name: e.target.value}) }
                    value={name}
                  />
                  <h3>Kategori: {currentCat}</h3>
                  <Select
                    className='select'
                    defaultValue={currentCat}
                    onChange={this.handleCategoryChange}
                  >
                    {
                      categories.map(e => (
                        <Option value={e.id}>{e.name}</Option>
                      ))
                    }
                  </Select>

                  <Select
                    className='select'
                    defaultValue={currentSubcat} 
                    onChange={val => this.setState({newSubcatId: val})}
                  >
                    { this.renderSubCat(currentSubcat) }
                  </Select>

                  <h3>Total stok: {totalStock}</h3>
                  <h3>Price range: {lowestprice} - {highestPrice}</h3>

                  <Input
                    placeholder='Link tokopedia'
                    onChange={e => this.setState({tokopedia: e.target.value}) }
                    value={tokopedia}
                  />
                </Col>

              </Row>
            </section>

            <section>
              <h3>Semua Item</h3>

              { items.map(e => this.renderItemCard(e)) }
            </section>


          </div>
        </Layout>
      </Layout>
    )
  }
}

export default EditProductItem;