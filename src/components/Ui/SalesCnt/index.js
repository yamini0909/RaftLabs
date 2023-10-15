import React from "react";

const SalesCnt = () => {
  return (
    <div className="flex flex-col sm:items-center">
      <div className="heading">
        <h1 className="text-lg text-black font-semibold">Total Sales & Cost</h1>
        <p className="text-sm text-[#8f8fb8]">Last 60 days</p>
      </div>
      <div className="desc mt-10">
        <div className="flex items-center">
          <h2 className="text-[#776ce7] text-3xl font-bold">$956.82k</h2>
          <div className="text-[#68d789] text-sm ml-6 bg-[#c2f9d9] font-bold py-2 px-6 rounded-2xl"> +5.4%</div>
        </div>
        <div className="flex mt-2">
          <h2 className="text-[#54cba7] font-bold mr-2">+8.20k</h2>
          <div className=" text-[#8f8fb8]">vs prev. 60 days</div>
        </div>
      </div>
    </div>
  );
};

export default SalesCnt;
