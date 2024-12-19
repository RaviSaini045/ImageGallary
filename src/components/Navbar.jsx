import React from "react";
import { Layout, Menu, Button } from "antd";
import { HomeOutlined, UploadOutlined, SearchOutlined } from "@ant-design/icons";

const { Header } = Layout;

const Navbar = () => {
  return (
    <Layout>
      <Header style={{ backgroundColor: "#232F3E", padding: "0 20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}>Logo</div>
          <Menu theme="dark" mode="horizontal" style={{ backgroundColor: "#232F3E", margin: 0 }}>
            <Menu.Item key="1" icon={<HomeOutlined />}>
              <Button type="link" href="/" style={{ color: "white" }}>
                Home
              </Button>
            </Menu.Item>
            <Menu.Item key="2" icon={<UploadOutlined />}>
              <Button type="link" href="/upload" style={{ color: "white" }}>
                Upload
              </Button>
            </Menu.Item>
            <Menu.Item key="3" icon={<SearchOutlined />}>
              <Button type="link" href="/search" style={{ color: "white" }}>
                Search
              </Button>
            </Menu.Item>
          </Menu>
        </div>
      </Header>
    </Layout>
  );
};

export default Navbar;
