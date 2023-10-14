import React from "react";
import GreetingCnt from "./GreetingCnt";
import { SearchOutlined, BellOutlined, DownOutlined } from "@ant-design/icons";
import { Avatar, Space } from "antd";

const GreetingProfile = () => {
  return (
    <div className="flex w-full h-24 justify-between px-10 items-center">
      <GreetingCnt />
      <div className="flex items-center">
        <div className="mx-4 bg-[#f3f4f8] px-2 py-2 rounded-full">
          <SearchOutlined style={{ fontSize: "20px", color: "#8f8fb8" }} />
        </div>
        <div className="mx-4 relative">
          <BellOutlined style={{ fontSize: "20px", color: "#8f8fb8" }} />
          <div className="p-2 border-[#6e62e5] bg-[#6e62e5] rounded-full absolute bottom-2 left-3"></div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center">
          <div className="">
            <div className=" rounded-full border-2 py-2 px-4 shadow-lg shadow-grey-500/5 ">
              <Space>
                <Avatar
                  src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
                  size={25}
                />
              </Space>
              Jhontosan
              <DownOutlined
                className="mx-2"
                style={{ fontSize: "10px", color: "#8f8fb8" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreetingProfile;
