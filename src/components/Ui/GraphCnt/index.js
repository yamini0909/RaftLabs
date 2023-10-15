import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import {
  DownOutlined,

} from "@ant-design/icons";
import { Space } from "antd";
import "./styles.css"; 

const data = [
  { name: "1-10 Aug", uv: 20, fill: "#d3cffc" },
  { name: "11-20 Aug", uv: 40, fill: "#6e62e5" },
  { name: "21-30 Aug", uv: 30, fill: "#d3cffc" },
  { name: "1-10 Sep", uv: 60, fill: "#6e62e5" },
  { name: "11-20 Sep", uv: 10, fill: "#d3cffc" },
  { name: "21-30 Sep", uv: 30, fill: "#6e62e5" }
];

const GraphCnt = () => {
  return (
    <div className="relative  max-[400px]:hidden">
    <div className="flex justify-between">
      <h2 className="font-bold text-right ml-14">Analytics <span className="text-[#68d789]">+5.4%</span></h2>
      <Space className=" px-4  rounded-lg text-grey">
          Month
          <DownOutlined />
        </Space>
    </div>
<BarChart width={400} height={150} data={data} margin={{ top: 5, right: 5, left: 5, bottom: -30 }}>
      <XAxis  dataKey="name" />
      <YAxis domain={[0, 60]} ticks={[20, 40, 60]} />
      <Tooltip />
      <Legend />
      <Bar dataKey="uv" fill="#fff" barSize={35} radius={[8, 8, 0, 0]} />
    </BarChart>
    </div>
    
  );
};

export default GraphCnt;
