import React, { useState } from "react";
import MeetingDesc from "./MeetingDesc";

function MeetingCal() {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const [week, setWeek] = useState(1); // state to keep track of the current week

  // Handler functions for navigating to the previous and next weeks
  const prevWeek = () => {
    if (week > 1) setWeek(week - 1);
  };

  const nextWeek = () => {
    if (week < 52) setWeek(week + 1);
  };
  return (
    <div  className="divide-y pb-96 lg:pb-10">
      <div style={{ margin: "20px", fontFamily: "Arial", color: "grey" }}>
        <div className="flex justify-between items-center w-full">
          <h2 className="text-2xl text-black my-4">October 2023</h2>
          <div className="max-[400px]:hidden" style={{ display: "flex", justifyContent: "" }}>
            <div className="px-2 py-1 border-2 rounded-full mx-4 max-[400px]:hidden ">
              <button  onClick={prevWeek} >
                {"<"}
              </button>
            </div>

            <button className="px-2 border-2 rounded-full max-[400px]:hidden " onClick={nextWeek}>{">"}</button>
          </div>
        </div>

        <div className=" max-[400px]:hidden flex justify-between " >
          {days.map((day, index) => (
            <div key={index} style={{ width: "10vw", textAlign: "center" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "25px",
                  height: "35px",
                  padding:"10px 20px",
                  borderRadius: "50%",
                  backgroundColor: index === 2 ? "blue" : "transparent",
                  color: index === 2 ? "white" : "grey",
                }}
              >
                {day.slice(0, 3)}
              </div>
              <div>{`${index + 10}`}</div>
            </div>
          ))}
        </div>
      </div>
      <MeetingDesc/>
    </div>
  );
}

export default MeetingCal;
