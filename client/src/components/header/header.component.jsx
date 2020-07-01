// ASSETS
import LogoSds from '../../assets/img/logo-sds.svg';
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';

// CSS LIBRARIES
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Row, Col, Menu, Button, Input } from 'antd';
import 'antd/dist/antd.css';

// STYLES
import Styles from './header.styles';

// PACKAGES
import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

// REDUX
import { storeSearchValue } from '../../redux/product/product.actions';

const { SubMenu } = Menu;
const { Search } = Input; 

class Header extends React.Component {
  constructor () {
    super()
    this.renderNavCat = this.renderNavCat.bind(this)

    this.state = {
      searchInputValue: '',
      searchInputResult: [],
      categories: [],
      subcat: []
    }
  }

  findSearchInput(textValue, storeSearchValue) {
    let state = this;
    const valueArr = textValue.split(' '),
          obj = {
            valueArr
          }  

    axios.post('/api/product-from-search', obj)
    .then(function (response) {
      state.setState({ searchInputValue: textValue, searchInputResult: response.data })
    })
    .then(function (response){  
      storeSearchValue(state.state.searchInputValue, state.state.searchInputResult)
      state.handleRedirect('/results')
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  fetchCategories() {
    const state = this;
    axios.get('/api/categories')
      .then( res => {
        state.setState({categories: res.data})
      })
      .catch(err => console.log(err))
  }

  renderNavCat () {
    const { categories } = this.state;

    if (categories.length > 0) {
      return categories.map(c => (
        <Menu.Item key="3">{c.name}</Menu.Item>
      ))  
    }

    return (
      <Menu.Item key="3">Option 3</Menu.Item>
    )
  }

  componentDidMount() {
    this.fetchCategories()
  }

  handleRedirect(params) {
    window.location.href = params;
  }

  render() {
    const { storeSearchValue } = this.props;

    return (
      <div>
        <Row css={Styles.container}>
          <Col span={5}>
            <img src={LogoSds} alt='logo' css={Styles.logo} onClick={() => this.handleRedirect('/')}/>
          </Col>
          
          <Col span={12} css={Styles.nav}>
            <Row gutter={10}>
              <Col span={8}>
                <Menu css={Styles.kategori} mode='inline'> 
                  <SubMenu title='Kategori'>
                    { 
                      this.renderNavCat()
                    }
                  </SubMenu>
                </Menu>
              </Col>
              <Col span={16}>
                <Search
                  placeholder="Cari barang"
                  size="sm"
                  onSearch={ value =>{ this.findSearchInput(value, storeSearchValue) } }
                  css={Styles.searchBar}
                />
              </Col>
            </Row>

            

          </Col>

          <Col span={7} css={Styles.nav}>
            <Button type="default" size='default' css={Styles.button}>Log In</Button>
            <Button type="primary" size='default' css={Styles.button}>Sign In</Button>
            <ShoppingCartOutlined css={Styles.icon} style={{fontSize: '3.5rem'}}/>
            <HeartOutlined css={Styles.icon} style={{fontSize: '3.5rem'}}/>
          </Col>
        </Row>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  storeSearchValue: (keyword, result) => dispatch(storeSearchValue(keyword, result))
})

export default connect(null, mapDispatchToProps)(Header);