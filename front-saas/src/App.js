import "./App.less";
import React from "react";
import Dashboard from "./pages/Dashboard";
import Lists from "./pages/List";
import Login from "./pages/Login";
import Cal from "./pages/Cal";

import Home from "./pages/Home";
import { AnimatedSwitch } from "react-router-transition";
import { Layout, Row, Col, Button, Menu } from "antd";
import "./styles/_common.less";
import "./img/avatar.png";
import "antd/dist/antd.css";
import { QuestionCircleOutlined } from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";
import "./styles/_common.less";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import {
  CalendarOutlined,
  PieChartOutlined,
  ToolOutlined,
  UnorderedListOutlined,
  BarChartOutlined,
  PrinterOutlined,
  SettingFilled,
  QuestionCircleFilled,
} from "@ant-design/icons";
const { Content, Header, Sider } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header className="header site-layout-background">
          <Row>
            <Col span={12}>
              <svg
                className="logo"
                width="168"
                height="34"
                viewBox="0 0 168 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.184405 0.799998H13.1804C15.2444 0.799998 16.9124 1.364 18.1844 2.492C19.4564 3.62 20.0924 5.108 20.0924 6.956V9.512C20.0924 10.76 19.7084 11.864 18.9404 12.824C18.1964 13.76 17.1524 14.456 15.8084 14.912V14.984C16.5764 15.44 17.1884 16.028 17.6444 16.748C18.1244 17.444 18.5324 18.356 18.8684 19.484L20.8844 26H16.5284L14.5844 19.772C14.2724 18.692 13.7924 17.864 13.1444 17.288C12.4964 16.712 11.7404 16.424 10.8764 16.424H4.3964V26H0.184405V0.799998ZM12.2444 12.788C13.3484 12.788 14.2244 12.488 14.8724 11.888C15.5444 11.288 15.8804 10.508 15.8804 9.548V7.064C15.8804 6.296 15.6284 5.672 15.1244 5.192C14.6204 4.712 13.9484 4.472 13.1084 4.472H4.3964V12.788H12.2444ZM19.4064 0.799998H23.6184V11.492H36.0744V0.799998H40.2504V26H36.0744V15.164H23.6184V26H19.4064V0.799998Z"
                  fill="#0091F9"
                />
                <path
                  d="M41.7844 26C41.0404 26 40.4644 25.796 40.0564 25.388C39.6484 24.98 39.4444 24.404 39.4444 23.66V0.799998H49.8844C51.6604 0.799998 53.2204 1.148 54.5644 1.844C55.9084 2.516 56.9524 3.488 57.6964 4.76C58.4404 6.008 58.8124 7.448 58.8124 9.08V17C58.8124 19.952 58.0684 22.196 56.5804 23.732C55.0924 25.244 52.9084 26 50.0284 26H41.7844ZM49.9564 23.624C51.9964 23.624 53.5324 23.072 54.5644 21.968C55.6204 20.84 56.1484 19.184 56.1484 17V9.08C56.1484 7.328 55.5604 5.912 54.3844 4.832C53.2324 3.728 51.7084 3.176 49.8124 3.176H42.1084V23.624H49.9564ZM69.5342 26.288C67.5182 26.288 65.8982 25.7 64.6742 24.524C63.4502 23.324 62.8382 21.74 62.8382 19.772V14.624C62.8382 12.56 63.4502 10.904 64.6742 9.656C65.8982 8.384 67.5182 7.748 69.5342 7.748H72.4862C74.4062 7.748 75.9542 8.36 77.1302 9.584C78.3062 10.808 78.8942 12.428 78.8942 14.444V17.612H65.4302V19.772C65.4302 21.02 65.8022 22.04 66.5462 22.832C67.3142 23.6 68.3102 23.984 69.5342 23.984H72.2702C73.4702 23.984 74.4422 23.66 75.1862 23.012C75.9302 22.34 76.3022 21.452 76.3022 20.348H78.8222C78.8222 22.124 78.2222 23.564 77.0222 24.668C75.8222 25.748 74.2382 26.288 72.2702 26.288H69.5342ZM76.3022 15.38V14.444C76.3022 13.124 75.9542 12.068 75.2582 11.276C74.5622 10.46 73.6382 10.052 72.4862 10.052H69.5342C68.3102 10.052 67.3142 10.472 66.5462 11.312C65.8022 12.152 65.4302 13.256 65.4302 14.624V15.38H76.3022ZM88.3895 26C86.6135 26 85.3415 25.628 84.5735 24.884C83.8055 24.116 83.4215 22.856 83.4215 21.104V0.799998H86.0135V21.104C86.0135 22.016 86.1935 22.676 86.5535 23.084C86.9375 23.492 87.5495 23.696 88.3895 23.696H89.6135V26H88.3895ZM94.9983 5.336C94.4223 5.336 93.9543 5.156 93.5943 4.796C93.2343 4.436 93.0543 3.968 93.0543 3.392C93.0543 2.816 93.2343 2.348 93.5943 1.988C93.9543 1.628 94.4223 1.448 94.9983 1.448C95.5743 1.448 96.0423 1.628 96.4023 1.988C96.7623 2.348 96.9423 2.816 96.9423 3.392C96.9423 3.968 96.7623 4.436 96.4023 4.796C96.0423 5.156 95.5743 5.336 94.9983 5.336ZM93.7023 8.036H96.2943V26H93.7023V8.036ZM108.634 26C107.626 26 106.894 25.388 106.438 24.164L100.246 8.036H102.982L108.526 23.156H108.562L114.106 8.036H116.842L109.858 26H108.634ZM125.714 26.288C123.698 26.288 122.078 25.7 120.854 24.524C119.63 23.324 119.018 21.74 119.018 19.772V14.624C119.018 12.56 119.63 10.904 120.854 9.656C122.078 8.384 123.698 7.748 125.714 7.748H128.666C130.586 7.748 132.134 8.36 133.31 9.584C134.486 10.808 135.074 12.428 135.074 14.444V17.612H121.61V19.772C121.61 21.02 121.982 22.04 122.726 22.832C123.494 23.6 124.49 23.984 125.714 23.984H128.45C129.65 23.984 130.622 23.66 131.366 23.012C132.11 22.34 132.482 21.452 132.482 20.348H135.002C135.002 22.124 134.402 23.564 133.202 24.668C132.002 25.748 130.418 26.288 128.45 26.288H125.714ZM132.482 15.38V14.444C132.482 13.124 132.134 12.068 131.438 11.276C130.742 10.46 129.818 10.052 128.666 10.052H125.714C124.49 10.052 123.494 10.472 122.726 11.312C121.982 12.152 121.61 13.256 121.61 14.624V15.38H132.482ZM139.601 8.036H142.121V10.808C142.601 9.968 143.321 9.284 144.281 8.756C145.265 8.228 146.285 7.964 147.341 7.964H148.925V10.304H147.341C145.805 10.304 144.557 10.796 143.597 11.78C142.661 12.74 142.193 14.024 142.193 15.632V26H139.601V8.036ZM158.194 33.308C156.61 33.308 155.302 32.876 154.27 32.012C153.238 31.172 152.662 30.056 152.542 28.664H155.134C155.23 29.384 155.554 29.96 156.106 30.392C156.682 30.848 157.378 31.076 158.194 31.076H161.002C162.25 31.076 163.21 30.656 163.882 29.816C164.578 29 164.926 27.848 164.926 26.36V23.048C164.35 23.912 163.618 24.62 162.73 25.172C161.866 25.724 161.002 26 160.138 26H157.834C156.154 26 154.786 25.436 153.73 24.308C152.698 23.18 152.182 21.704 152.182 19.88V8.036H154.774V19.952C154.774 21.08 155.05 21.992 155.602 22.688C156.178 23.36 156.922 23.696 157.834 23.696H160.066C161.17 23.696 162.19 23.252 163.126 22.364C164.062 21.476 164.662 20.36 164.926 19.016V8.036H167.518V26.36C167.518 28.544 166.942 30.248 165.79 31.472C164.638 32.696 163.042 33.308 161.002 33.308H158.194Z"
                  fill="black"
                />
              </svg>
            </Col>

            <Col span={12} className="headerSpace">
              <Button className="btn-help">
                Help <QuestionCircleOutlined />
              </Button>
              <Button className="btn-pro">VERSION PRO</Button>
              <Avatar src="../../img/avatar.png" />
            </Col>
          </Row>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <Menu.Item
                key="1"
                className="noHover"
                icon={<PieChartOutlined />}
              >
                  <span className="text-color">Dashboard</span>
              </Menu.Item>
              {/* <Link to="/about">About</Link>*/}
              <Menu.Item
                key="2"
                className="noHover"
                icon={<CalendarOutlined />}
              >
                <span className="text-color">Planning</span>
              </Menu.Item>
              <Menu.Item
                key="3"
                className="noHover"
                icon={<UnorderedListOutlined />}
              >
                <span className="text-color">Liste</span>
              </Menu.Item>
              <Menu.Item
                key="4"
                className="noHover"
                icon={<BarChartOutlined />}
              >
                <span className="text-color"> Statistique</span>
              </Menu.Item>
              <Menu.Item key="5" className="noHover" icon={<PrinterOutlined />}>
                <span className="text-color"> Impression</span>
              </Menu.Item>
              <Menu.Item key="6" className="noHover" icon={<ToolOutlined />}>
                <span className="text-color"> Plus d’Outils</span>
              </Menu.Item>
              <Menu.Item
                key="7"
                className="noHover BottomSettings"
                icon={<SettingFilled />}
              >
                <span className="spanSetting">Paramètre</span>
              </Menu.Item>
              <Menu.Item
                key="8"
                className="noHover"
                icon={<QuestionCircleFilled />}
              >
                <span className="spanSetting">Aide</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Content style={{ width: "100% !important" }}>
            <Router>
              {/* <RouterSwitch>
              <Route component={Nav} />
            </RouterSwitch> */}
              <AnimatedSwitch>
                <Route path="/Dashboard" exact component={Dashboard} />
                <Route path="/Lists" exact component={Lists} />
                <Route path="/" exact component={Home} />
                <Route path="/Login" exact component={Login} />
                <Route path="/Calendar" exact component={Cal} />

              </AnimatedSwitch>
            </Router>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
export default App;
