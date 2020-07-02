/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Layout, Row, Col, Input, Select, Upload, Button, InputNumber, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import Styles from './product-item-edit.styles';

import React from 'react';
import axios from 'axios';

import Navigation from '../navigation/navigation.component';
import InputCardItem from '../input-card-item/input-card-item.component';


const { Option } = Select

class EditProductItem extends React.Component {
  constructor(props) {
    super(props)
    this.fetchCategories = this.fetchCategories.bind(this)
    this.fetchSubCategories = this.fetchSubCategories.bind(this)
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

    const obj   = {id: this.state.productId },
          state = this

    axios.post('/api/product-to-view', obj )
    .then(function (response) {
      if(response.data.length > 0) {
        const items        = response.data,
              name         = items.map( i => i.name)[0],
              productImage = items.map( i => i.image)[0],
              price        = items.map(i => i.price).sort(),
              tokopedia    = items.map(i => i.tokopedia)[0],
              lowestprice  = price.pop(),
              highestPrice = price[0],
              stockarr     = items.map(i => i.stocklevel),
              totalStock   = stockarr.reduce((a, b) => a + b, 0)

        return state.setState({ items, name, productImage, tokopedia, lowestprice, highestPrice, totalStock })
      }

      axios.post('/api/product-from-id', obj )
      .then( res => {
        const items        = res.data,
              name         = items.name,
              productImage = items.image,
              tokopedia    = items.tokopedia              
        console.log(items)
        
        state.setState({ items, name, productImage, tokopedia })
      })
      .catch(err => console.log(err))

    })
    .catch(err => console.log(err))
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
              {
                (totalStock)
                ? items.map(e => (<InputCardItem item={e} />))
                : null
              }
            </section>

            <section>
              <h3>Tambah item baru: </h3>
              <InputCardItem
                item={{item_id: '',
                       product_id: this.state.productId,
                       condition: '',
                       good: '',
                       bad: '',
                       price: '',
                       stocklevel: '',
                       item_images: '',
                       addNew: true}}
              />
            </section>

          </div>
        </Layout>
      </Layout>
    )
  }
}

export default EditProductItem;