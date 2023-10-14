import React from "react";
import {
  DownOutlined,
  CalendarOutlined,
  UserOutlined,
  AntDesignOutlined
} from "@ant-design/icons";
import { Button, Dropdown, message,Tooltip, Space, Table, Avatar} from "antd";


const items = [
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
    key: "0",
  },
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    ),
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "3rd menu item（disabled）",
    key: "3",
    disabled: true,
  },
];
const { Column, ColumnGroup } = Table;
const data = [
  {
    key: "1",
    customer: (
      <>
        {" "}
        <Space>
          <Avatar
            src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
            size={25}
          />
        </Space>
        <span>Flyod Jhontosan</span>
      </>
    ),
    status: (
      <div>
        {" "}
        <span className="px-2 bg-green-300 rounded-full mx-2"></span>Success
      </div>
    ),
    date: "Nov 02,2021",
    invoice: "$100,000",
    people: (
      <>
       <Avatar.Group>
      <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
      <a href="https://ant.design">
        <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
      </a>
      <Tooltip title="Ant User" placement="top">
        <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
      </Tooltip>
      <Avatar style={{ backgroundColor: '#1677ff' }} icon={<AntDesignOutlined />} />
    </Avatar.Group>
      </>
    ),
  },
  {
    key: "2",
    customer: (
      <>
        {" "}
        <Space>
          <Avatar
            src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
            size={25}
          />
        </Space>
        <span>Flyod Jhontosan</span>
      </>
    ),
    status: (
      <div>
        {" "}
        <span className="px-2 bg-yellow-300 rounded-full mx-2"></span>Pending
      </div>
    ),
    date: "Nov 02,2021",
    invoice: "$100,000",
    people: (
      <>
       <Avatar.Group>
      <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
      <a href="https://ant.design">
        <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
      </a>
      <Tooltip title="Ant User" placement="top">
        <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
      </Tooltip>
      <Avatar style={{ backgroundColor: '#1677ff' }} icon={<AntDesignOutlined />} />
    </Avatar.Group>
      </>
    ),
  },
];

const Transaction = () => {
  return (
    <div className="m-6 p-2">
      <div className="heading-month flex justify-between">
        <h2 className="text-2xl font-bold ">Transaction History</h2>
        <div className="month-dropdown rounded-lg">
          {" "}
          <Dropdown
            menu={{
              items,
            }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <div className="flex justify-between items-center bg-white border-2 px-4 rounded-lg">
                <div className="mr-2">
                  <CalendarOutlined />
                </div>
                <Space className="px-4 py-2 rounded-xl">
                  Month
                  <DownOutlined />
                </Space>
              </div>
            </a>
          </Dropdown>
        </div>
      </div>
      <div className="dropdowns flex gap-10">
        <Space className="bg-[#e7e9ee] border-2 px-4 py-2 rounded-xl">
          Recepient
          <DownOutlined />
        </Space>
        <Space className="bg-[#e7e9ee] border-2 px-4 py-2 rounded-xl">
          Amount
          <DownOutlined />
        </Space>
        <Space className="bg-[#e7e9ee] border-2 px-4 py-2 rounded-xl">
          Status
          <DownOutlined />
        </Space>
      </div>
      <div className="data-table my-4">
        <Table dataSource={data} pagination={false}>
          <Column title="Customer" dataIndex="customer" key="customer" />
          <Column title="Status" dataIndex="status" key="status" />

          <Column title="Date" dataIndex="date" key="date" />
          <Column title="Invoice" dataIndex="invoice" key="invoice" />
          <Column title="People" dataIndex="people" key="people" />
        </Table>
      </div>
    </div>
  );
};

export default Transaction;
