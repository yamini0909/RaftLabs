import React from "react";
import GraphCnt from "../GraphCnt";
import SalesCnt from "../SalesCnt";

const ChartCnt = () => {
  return (
    <div className="border-#8f9192 border-2 rounded-2xl flex py-4 px-8 mx-6 my-2 justify-between">
      <SalesCnt />
      <GraphCnt />
    </div>
  );
};

export default ChartCnt;
