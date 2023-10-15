import React from "react";
import { Layout, Space } from "antd";
import SiderContent from "./components/Sider";
import GreetingProfile from "./components/Header";
import Container from './components/Container'
import './App.css'
const { Header, Footer, Sider, Content } = Layout;


const layoutStyle={
  display: "grid",
  gridTemplateColumns:"1fr 5fr" 
}
const headerStyle = {

  color: "#343639",
  backgroundColor: "#fff",

};
const contentStyle = {
  backgroundColor: "#fff",
};
const siderStyle = {
  color: "#606265",
  backgroundColor: "#fff",
  width: "100%"
  
};

const bodyStyle ={
  width: "100%"
}


const App = () => (
  <Space
    direction="vertical"
    style={{
      width: "100%",
      // padding: "1%",
    }}
    size={[0, 48]}
  >
    <Layout style={layoutStyle}>
    <Sider style={siderStyle} breakpoint="sm" width="280"> <SiderContent  /></Sider>
     
      <Layout style={bodyStyle}>
        <Layout style={headerStyle}>
          <GreetingProfile />
        </Layout>
        <Content style={contentStyle}><Container/></Content>
     
      </Layout>
    </Layout>
  </Space>
);
export default App;
