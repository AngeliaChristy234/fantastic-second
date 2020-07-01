import { Layout, Menu } from 'antd';
import {
  BranchesOutlined,
  TagFilled
} from '@ant-design/icons';


import React from 'react';

const { Sider } = Layout;


class Navigation extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { openKeys } = this.props    
    
    return (
      <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
        <Menu theme="dark" defaultSelectedKeys={[openKeys]} mode="inline">
          <Menu.Item
            key="1"
            icon={<BranchesOutlined />}
            onClick={() => window.location.href = '/admin/category'}
          >
            Kategori & sub Kategori
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={<TagFilled />}
            onClick={() => window.location.href = '/admin/product'}
          >
            Produk & item
          </Menu.Item>
        </Menu>
      </Sider>
    )
  }
}

export default Navigation;