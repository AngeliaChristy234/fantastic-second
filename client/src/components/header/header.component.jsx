// ASSETS
import LogoSds from '../../assets/img/logo-sds.svg';
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';

// CSS LIBRARIES
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Row, Col, Menu, Dropdown, Button, Input } from 'antd';
import 'antd/dist/antd.css';

// STYLES
import Styles from './header.styles';

const { Search } = Input;

const categoryDropdown = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://localhost:3000/">
        1st menu item
      </a>
    </Menu.Item>
  </Menu>
)

const Header = () => (
  <div>
    <Row css={Styles.container}>
      <Col span={5}>
        <img src={LogoSds} alt='logo' css={Styles.logo}/>
      </Col>

      <Col span={12} css={Styles.nav}>
        <Dropdown overlay={categoryDropdown} css={Styles.kategori}>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>Kategori</a>
        </Dropdown>
        
        <Search
          placeholder="Cari barang"
          size="sm"
          onSearch={value => console.log(value)}
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

export default Header;