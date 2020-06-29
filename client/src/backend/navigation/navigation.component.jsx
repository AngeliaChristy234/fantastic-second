import { Layout, Menu } from 'antd';
import {
  PieChartOutlined
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
    return (
      <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>Kategori & sub Kategori</Menu.Item>
          <Menu.Item key="2" icon={<PieChartOutlined />}>Produk & item</Menu.Item>
          <Menu.Item key="3" icon={<PieChartOutlined />}>Semua Kategori</Menu.Item>
          <Menu.Item key="4" icon={<PieChartOutlined />}>Semua Produk</Menu.Item>
        </Menu>
      </Sider>
    )
  }
}

export default Navigation;