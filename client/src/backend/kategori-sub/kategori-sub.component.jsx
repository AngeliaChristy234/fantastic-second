import { Layout, Menu, Input, Button, Cascader, message, Row, Col } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

import React from 'react';
import axios from 'axios';

import Navigation from '../navigation/navigation.component';

class Kategori extends React.Component {
  constructor() {
    super()
    this.fetchCategories = this.fetchCategories.bind(this)
    this.fetchSubCategories = this.fetchSubCategories.bind(this)
    this.handlePostCat = this.handlePostCat.bind(this)
    this.handlePostSubCat = this.handlePostSubCat.bind(this)

    this.state = {
      categories: [],
      subcat: [],
      newcat: '',
      newsubcat: '',
      choosencat: ''
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
        state.setState({subcat: res.data})
      })
      .catch(err => console.log(err))
  }

  handlePostCat() {
    const { newcat } = this.state
    if (newcat === '' ) {
      return message.info('isi kategori')
    }

    const obj = {name: newcat}
          
    axios.post('/api/add_categories', obj)
      .then( response => {
        this.fetchCategories()
        this.setState({newcat: ''})
      })
      .catch( err => console.log(err))
  }

  handlePostSubCat() {
    const { newsubcat, choosencat } = this.state
    if (newsubcat === '' || choosencat === '') {
      return message.info('isi sub kategori')
    }
    const obj = {
            name: newsubcat,
            category_id: choosencat[0]
          }
          
    axios.post('/api/add_categories_sub', obj)
      .then( response => {
        this.fetchSubCategories()
        this.setState({newsubcat: '', choosencat: ''})
      })
      .catch( err => console.log(err))
  }

  handleDeleteCat(id) {
    const obj = { id }

    axios.post('/api/delete_categories', obj)
      .then(res => {
        this.fetchCategories()
      })
      .catch(err => console.log(err))
  }

  handleDeleteSubCat(id) {
    const obj = { id }

    axios.post('/api/delete_categories_sub', obj)
      .then(res => {
        this.fetchSubCategories()
      })
      .catch(err => console.log(err))
  }

  renderData() {
    const { categories, subcat } = this.state;

    if(categories.length > 0 && subcat.length > 0){

      return categories.map( c => {
        const listOfSubcats = subcat.filter(e => e.category_id === c.id)
        
        return <React.Fragment>
            <Col span={12}>
              <p style={{display: 'inline'}}>{c.name}</p>
              <Button
                icon={<DeleteOutlined />}
                size='small'
                style={{float: 'right'}}
                onClick={() => this.handleDeleteCat(c.id)}
              />
            </Col>
            <Col span={12}>
              
              {
                listOfSubcats.map(e =>
                  ( 
                    <div style={{display: 'block', marginBottom: '2rem'}}>
                      <p style={{display: 'inline'}}>{e.id} - {e.name}</p>
                      <Button
                        icon={<DeleteOutlined />}
                        size='small'
                        style={{float: 'right'}}
                        onClick={() => this.handleDeleteSubCat(e.id)}
                      />
                    </div>
                  )
                )
              }

            </Col>
          </React.Fragment>
      })
    }
  }

  renderSubcatNoCat() {
    const {subcat} = this.state;
    const otherSubcats = subcat.filter( e => e.category_id === null)

    return (
      <React.Fragment>
        <Col span={12}>
          <p style={{display: 'inline'}}>lainnya</p>
        </Col>
        <Col span={12}>             
          {
            otherSubcats.map(e =>
              ( 
                <div style={{display: 'block', marginBottom: '2rem'}}>
                  <p style={{display: 'inline'}}>{e.id} - {e.name}</p>
                  <Button
                    icon={<DeleteOutlined />}
                    size='small'
                    style={{float: 'right'}}
                    onClick={() => this.handleDeleteSubCat(e.id)}
                  />
                </div>
              )
            )
          }
        </Col>
      </React.Fragment>
    )

    
  }

  componentDidMount() {
    this.fetchCategories()
    this.fetchSubCategories()
  }

  handleMenuClick(e) {
    message.info('Click on menu item.');
  }

  kat_dropdown = (
    <Menu onClick={this.handleMenuClick}>
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

  render() {
    const { categories, subcat, newcat, newsubcat, choosencat } = this.state;

    return (
      <Layout style={{ minHeight: '100vh'}}>
        <Navigation openKeys='1'/>

        <Layout className="site-layout">
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <h2 style={{marginBottom: '3rem'}}>Kategori & Sub Kategori</h2>

            <form>
              <Input
                size='large'
                placeholder='Tambah kategori baru'
                style={{width: '30%', marginRight: '10rem'}}
                onChange={ e => { this.setState({ newcat: e.target.value}) }}
                value={newcat}
              />
              <Button size='large' shape="round" onClick={this.handlePostCat}>Tambah</Button>
            </form>

            <form>
              <Input
                size='large'
                placeholder='Tambah sub-kategori baru'
                style={{width: '30%'}}
                onChange={ e => { this.setState({ newsubcat: e.target.value }) }}
                value={newsubcat}
              />
              <Cascader
                fieldNames={{ label: 'name', value: 'id'}}
                options={categories}
                size='large'
                placeholder="Pilih kategori"
                style={{margin: '3rem 10rem 6rem 10rem'}}
                onChange={e => this.setState({choosencat: e})}
                value={choosencat}
              />

              <Button size='large' shape="round" onClick={this.handlePostSubCat}>Tambah</Button>
            </form>

            <Row  gutter={32}>
              <Col span={12}>
                <h3>Kategori</h3>
                <hr/>
              </Col>
              <Col span={12}>
                <h3>ID - Sub Kategori</h3>
                <hr/>
              </Col>
              {
                this.renderData()
              }
              {
                (subcat.length > 0)
                ? this.renderSubcatNoCat()
                : null
              }
            </Row>
          </div>
        </Layout>
      </Layout>
    )
  }
}

export default Kategori;