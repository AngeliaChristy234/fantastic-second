// ASSETS
import LogoSds from '../../assets/img/logo-sds.svg';
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';

// CSS LIBRARIES
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Row, Col, Menu, Dropdown, Button, Input } from 'antd';
import 'antd/dist/antd.css';

// STYLES
import Styles from './header.styles';

// PACKAGES
import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

// REDUX
import { storeSearchValue } from '../../redux/product/product.actions';

const { Search } = Input; 

class Header extends React.Component {
  constructor () {
    super()

    this.state = {
      searchInputValue: '',
      searchInputResult: []
    }
  }

  findSearchInput(textValue, storeSearchValue) {
    let state = this;
    const valueArr = textValue.split(' '),
          obj = {
            valueArr
          }  

    axios.post('http://localhost:5000/api/product-from-search', obj)
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

  handleRedirect(params) {
    window.location.href = params;
  }
  
  categoryDropdown = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://localhost:3000/">
          1st menu item
        </a>
      </Menu.Item>
    </Menu>
  )

  render() {
    const { storeSearchValue } = this.props;

    return (
      <div>
        <Row css={Styles.container}>
          <Col span={5}>
            <img src={LogoSds} alt='logo' css={Styles.logo} onClick={() => this.handleRedirect('/')}/>
          </Col>

          <Col span={12} css={Styles.nav}>
            <Dropdown overlay={this.categoryDropdown} css={Styles.kategori}>
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>Kategori</a>
            </Dropdown>
            
            <Search
              placeholder="Cari barang"
              size="sm"
              onSearch={ value =>{ this.findSearchInput(value, storeSearchValue) } }
              css={Styles.searchBar}
            />
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