import React, { useContext, useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { HeaderWeb } from '../header';
import { SiderWeb } from '../sider';
import { HomePage } from '../cards';
import { ApiContext } from '../../context';
const { Header, Sider, Content } = Layout;
const Layout1 = () => {
  const {collapsed,setCollapsed} = useContext(ApiContext);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  console.log(collapsed,"collapsed");
  return (
    <Layout className=''>
      <Sider style={{backgroundColor:"none"}} trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <SiderWeb/>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <div className='d-flex align-items-center w-100 h-100'>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <HeaderWeb/>
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            height:"100%",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <HomePage/>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Layout1;