import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Badge,  Progress, Space } from "antd";
import "./header.css";

const GreetingCnt = () => {
  return (
    <div className="flex justify-start items-center">
     <Space wrap className="relative">
     <Progress type="circle" percent={30} size={70} defaultColor={"#7a70e7"}/>
     <div className="absolute  custom-position">
     <Badge count={3} color="#7a70e7" >
            <Avatar
              src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
              size={55}
             
            />
          </Badge>
     </div>
          
          </Space> 
      <div className="text-left ml-4 gap-0 flex flex-col">
        <div className="text-[#414347] text-2xl font-bold my-0">
          Good Evening Team!
        </div>
        <div className="text-[#caced3] my-0">
          Have an in-depth look at all the metrics within your dashboard.
        </div>
      </div>
    </div>
  );
};

export default GreetingCnt;
