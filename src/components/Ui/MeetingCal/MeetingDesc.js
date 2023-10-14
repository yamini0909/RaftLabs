import React from "react";
import { ClockCircleOutlined, VideoCameraOutlined } from "@ant-design/icons";
const MeetingDesc = () => {
  const data = [
    {
      title: "Meeting with Client",
      task: "Google Meet",
      time: "12 pm",
    },
    {
      title: "Monthly Sales",
      task: "Google Meet",
      time: "03 pm",
    },
    {
      title: "Total Profit",
      task: "Google Meet",
      time: "05 pm",
    },
  ];
  const getCardData = () => {
    return data.map((obj, index) => (
      <div key={index} className="flex border-b-2 border-grey-500">
        <div className="blue-img mr-4 bg-gray-300 w-1/6 h-14 rounded-full "></div>
        <div>
          <h2 className="font-thin text-lg text-left">
            <div>{obj.title}</div>
          </h2>
          <div className="flex  my-2">
            <div className="flex   my-2">
              <VideoCameraOutlined />
              <div className="mx-2">{obj.task}</div>
            </div>
            <div className="flex  my-2">
              <ClockCircleOutlined />
              <div className="mx-2">{obj.time}</div>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="flex flex-col  p-4 gap-10 mx-6 my-8 rounded-3xl items-left">
      {getCardData()}
    </div>
  );
};

export default MeetingDesc;
