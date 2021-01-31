/** @jsx jsx */
import { jsx } from '@emotion/core'

import { Layout, Row, Col, Input, Button, Select, Table, Card, message, Space } from 'antd';
import Styles from './product-item.styles';

import React from 'react';
import axios from 'axios';

import Navigation from '../navigation/navigation.component';
import InputCard from '../input-card/input-card.component';
import InputCardProduct from '../input-card-product/input-card-product.component';

const { Option } = Select;

class Product extends React.Component {
  constructor() {
    super()
    this.handleNameSearch = this.handleNameSearch.bind(this)

    this.state = {
      allProducts: [],
      nullProducts: [],
      allItems: [],

      filteredProducts: [],
      nameKeyword: '',
      id: Number,
      categoryId: Number,

      categories: [],
      subcats: []
    }
  }

  fetchProducts() {
    const state = this;
    axios.get('/api/products')
      .then( res => {
        state.setState({allProducts: res.data})
      })
      .catch(err => console.log(err))
  }

  fetchProductsCatnull() {
    const state = this;
    axios.get('/api/products_catnull')
      .then( res => {
        state.setState({nullProducts: res.data})
      })
      .catch(err => console.log(err))
  }

  fetchItems(id) {
    const state = this

    axios.get('/api/items')
      .then(res => {
        state.setState({allItems: res.data})
      })
      .catch(err => console.log(err))

  }

  handleNameSearch() {
    const state = this

    const valueArr = state.state.nameKeyword.split(' '),
          obj = { name: valueArr }  
    
    axios.post('/api/product-from-name', obj)
    .then( res => {
      state.setState({ filteredProducts: res.data, nameKeyword: '' })
      console.log(state.state.filteredProducts);
    })
    .catch(err => console.log(err))
  }

  handleDeleteItem(id) {
    axios.post('/api/delete-item', {item_id: id})
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

  handleDeleteProduct(id) {
    console.log(id);
    
    axios.post('/api/delete-product', {product_id: id})
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

  handleRedirect(cat, subcat, id) {
    window.location.href = `/admin/edit/${cat}/${subcat}/${id}`;
  }

  componentDidMount() {
    this.fetchProducts()
    this.fetchProductsCatnull()
    this.fetchItems()
  }

  categoryColumns = [
    { title: 'Id', dataIndex: 'product_id', key: 'id' },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Category', dataIndex: 'category', key: 'category' },
    { title: 'Subcat', dataIndex: 'subcat', key: 'subcat' },
    { title: 'Image', dataIndex: 'image', key: 'image' },
    { title: 'Tokopedia', dataIndex: 'tokopedia', key: 'tokopedia' },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: (text, record) => (
        <Space size='middle'>
          <Button
            type='primary'
            onClick={() => this.handleRedirect(
                            record.category,
                            record.subcat,
                            record.product_id
                          )}
          >Edit
          </Button>
          <Button
            type='primary' danger
            onClick={() => this.handleDeleteProduct(record.product_id)}
          >X</Button>
          </Space>
        )
    },
  ];

  subcatColumns = [
    { title: 'Item id', dataIndex: 'item_id', key: 'item_id' },
    { title: 'Condition', dataIndex: 'condition', key: 'condition' },
    { title: 'Good', dataIndex: 'good', key: 'good' },
    { title: 'Bad', dataIndex: 'bad', key: 'bad' },
    { title: 'Price', dataIndex: 'price', key: 'price' },
    { title: 'Stocklevel', dataIndex: 'stocklevel', key: 'stocklevel' },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: (text, record) => <Button danger onClick={ () => this.handleDeleteItem(record.item_id)}>X</Button>,
    },
  ];

  render() {
    const { allProducts, nullProducts, filteredProducts, allItems, nameKeyword, categories } = this.state;

    return (
      <Layout style={{ minHeight: '100vh'}}>
        <Navigation openKeys='2'/>

        <Layout className="site-layout">
          <div className="site-layout-background" css={Styles}>
            <section>
              <h2>Cari Produk dan Item</h2>
              <Row gutter={[32, 12]}>
                <Col span={12}>
                  <Input
                    size='large'
                    placeholder='Nama produk'
                    onChange={ e => { this.setState({ nameKeyword: e.target.value}) }}
                    value={nameKeyword}
                  />
                </Col>
                <Col span={12}>
                  <Button size='large' onClick={this.handleNameSearch}>Cari</Button>
                </Col>
              </Row>
              <Row gutter={[32, 12]}>
                <Col span={12}>
                  <Input size='large' placeholder='Produk id'/>
                </Col>
                <Col span={12}>
                  <Button size='large'>Cari</Button>
                </Col>
              </Row>
              <Row gutter={[32, 12]}>
                <Col span={12}>
                  <Select
                    size='large'
                    placeholder="Pilih kategori"
                  />
                </Col>
                <Col span={12}>
                  <Button size='large'>Cari</Button>
                </Col>
              </Row>
            </section>

            <section>
              <h2>Hasil pencaharian</h2>
              <Row gutter={32}>
              {
                (filteredProducts.length > 0)
                ? 
                  filteredProducts.map( e => (
                    <Col span={12}>
                      <InputCard
                        key={e.product_id} 
                        productId={e.product_id} name={e.name} 
                        category={e.category}
                        subcat={e.subcat} subcatId={e.category_sub_id}
                        image={e.image} tokopedia={e.tokopedia}
                      />
                    </Col>
                  ))
                
                : <Col span={12}>
                    <Card>
                      <p>Cari product yang anda perlukan</p>
                    </Card>
                  </Col>
              }
              </Row>
            </section>

            <section>
              <h2>Produk dan item</h2>
              <Table
                columns={this.categoryColumns}
                expandable={{
                  expandedRowRender: record => (
                    <Table
                      columns={this.subcatColumns}
                      dataSource={allItems.filter(i => i.product_id === record.product_id)}
                    />
                  )
                }}
                dataSource={allProducts}
                scroll={{ x: 1300 }}
              />
            </section>
            
            <section>
              <h3>Tanpa kategori</h3>
              <Table 
                columns={this.categoryColumns}
                dataSource={nullProducts}
                scroll={{ x: 1300 }}
              />
            </section>

            <section>
              <h2>Tambah produk</h2>
              <InputCardProduct />
            </section>

          </div>
        </Layout>
      </Layout>
    )
  }
}

export default Product;