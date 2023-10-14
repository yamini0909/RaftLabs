import React from "react";

const BlueCnt = () => {
  const data = [
    {
      title: "Monthly Revenue",
      price: "$3.500",
      percentage: "+2.4%",
      previous: "Previous Month",
      cost: "$1.7K",
    },
    {
      title: "Monthly Sales",
      price: "$6.750",
      percentage: "+1.4%",
      previous: "Previous Month",
      cost: "$3.1K",
    },
    {
      title: "Total Profit",
      price: "$10.900",
      percentage: "+4.3%",
      previous: "Previous Month",
      cost: "$8.9K",
    },
  ];
  const getCardData = () => {
    return data.map((obj, index) => (
      <div key={index}  className="flex justify-around items-center">
      <div className="blue-img mr-4 bg-cyan-300 p-6 rounded-full">

</div>
      <div>

      <h2 className="font-thin text-lg">{obj.title}</h2>
        <div className="flex my-2 items-center">
          <p className="mr-4 text-2xl">{obj.price}</p>
          <span className="bg-white text-[#6e62e5] p-1 rounded-2xl">{obj.percentage}</span>
        </div>
        <div className="flex my-2 items-center">
          <p className="mr-4 font-thin">{obj.previous}</p>
          <span className="font-bold">{obj.cost}</span>
        </div>
      </div>
      
       
      </div>
    ));
  };

  return <div className="flex bg-[#6e62e5] text-white p-4 gap-10 mx-6 my-8 rounded-3xl justify-evenly">{getCardData()}</div>;
};

export default BlueCnt;
