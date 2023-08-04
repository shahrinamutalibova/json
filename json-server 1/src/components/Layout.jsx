import React, {useState} from "react";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined
} from "@ant-design/icons";
import {Layout, Menu, Button} from "antd";
import {Link, Outlet} from "react-router-dom";

const {Header, Sider, Content} = Layout;
const LayoutBar = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Layout style={{height: "100vh"}}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                    <Menu.Item> <Link to={"/posts"}>   Posts</Link></Menu.Item>
                    <Menu.Item> <Link to={"/todo"}>   Todos</Link></Menu.Item>
                    <Menu.Item> <Link to={"/comments"}>  Comments</Link></Menu.Item>
                    <Menu.Item> <Link to={"/photos"}>   Photos</Link></Menu.Item>
                    <Menu.Item> <Link to={"/albums"}>   Albums</Link></Menu.Item>
                    <Menu.Item> <Link to={"/users"}>   Users</Link></Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined style={{color:"white"}}/> : <MenuFoldOutlined style={{color:"white"}}/>}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: "16px",
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: "24px 16px",
                        padding: 24,
                        minHeight: 280,
                        overflow:"scroll"
                    }}
                >
                    <Outlet/>
                </Content>
            </Layout>
        </Layout>
    );
};
export default LayoutBar;
