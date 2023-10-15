import React from "react";
import {
  DownOutlined,
  ArrowRightOutlined,
  UserOutlined,
  AntDesignOutlined,
} from "@ant-design/icons";
import { Space, Avatar, Tooltip } from "antd";

const HeadingCal = () => {
  return (
    <div className=" mt-4 py-2 px-10 border-b-2 border-grey-500">
      <p className="text-[#8f8fb8]">Premiun Access</p>
      <h2 className="text-3xl font-bold">
        Take Back <br />
        Your Creative <br />
        Control{" "}
        <Avatar.Group className="items-center">
          <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
          <a href="https://ant.design">
            <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
          </a>
          <Tooltip title="Ant User" placement="top">
            <Avatar
              style={{ backgroundColor: "#87d068" }}
              icon={<UserOutlined />}
            />
          </Tooltip>
          <Avatar
            style={{ backgroundColor: "#1677ff" }}
            icon={<AntDesignOutlined />}
          />
        </Avatar.Group>
      </h2>
      <Space className="py-2 rounded-xl text-[#8f8fb8] mt-2">
        The Professional Platform
        <DownOutlined />
      </Space>
      <div className="flex border-2 px-2  rounded-xl py-2  text-left justify-between mt-4 mb-8 lg:w-full">
        <div className="mr-4 text-[#6e62e5] font-bold">Upgrade Now</div>
        <ArrowRightOutlined style={{ color: "#6e62e5" }} />
      </div>
    </div>
  );
};

export default HeadingCal;
