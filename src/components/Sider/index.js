import React from "react";
import {
  HomeOutlined,
  LineChartOutlined,
  CompassOutlined,
  ShoppingCartOutlined,
  InboxOutlined,
  SettingOutlined,
  QuestionCircleOutlined,
  FolderOutlined,
} from "@ant-design/icons";
import {  Menu } from "antd";
import { Colors } from "chart.js";


function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("Home", "sub1", <HomeOutlined />),
  getItem("Analytics", "sub2", <LineChartOutlined />),
  getItem("Explore", "sub3", <CompassOutlined />),
  getItem("Shop", "sub4", <ShoppingCartOutlined />),
  getItem("Inbox", "sub5", <InboxOutlined />),
  {
    type: "divider",
  },
  getItem(
    "Tools",
    "grp",
    null,
    [
      getItem("Setting", "sub6", <SettingOutlined />),
      getItem("Help", "sub7", <QuestionCircleOutlined />),
    ],
    "group"
  ),
  getItem(
    "Projects",
    "grp",
    null,
    [
      getItem("Amazon", "sub8", <FolderOutlined />),
      getItem("Invinity HQ", "sub9", <FolderOutlined />),
    ],
    "group"
  ),
];
const App = () => {
  const onClick = (e) => {
    console.log("click ", e);
  };
  return (
    <div className="sider-container py-4 px-2">
      <div className="flex ml-6 mb-8 bg-white">
        <div className="border-[#7a6fe7] border-4 rounded-full ">
          <div className="border-[#fff] border-8 rounded-full"></div>
        </div>
        <h3 className="bg-white font-bold text-lg mx-2">Omni</h3>
      </div>

     
      <Menu
    onClick={onClick}
        defaultSelectedKeys={["sub1"]}
        mode="inline"
        items={items}
       />
    </div>
  );
};
export default App;
