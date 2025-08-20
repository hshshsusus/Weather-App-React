import React, { useState } from "react";
import { TbTemperatureSun } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import HoursWiseForecast from "./HoursWiseForecast";

const DaysForeCast = ({ comingDaysData }) => {

    const [open, setOpen] = useState(null);

    const handleOpen = (i) => {
        setOpen(i);
    }

    const filData = comingDaysData?.list.filter(e => e?.dt_txt.slice(11) === "21:00:00");

    return (
        <div className="coming flex flex-col gap-5 bg-[rgba(0,0,0,0.2)] rounded-[25px]">
            <p className="comingdays text-[25px] text-white font-semibold bg-[rgba(0,0,0,0.8)]">Coming days weather forecast</p>
            {filData?.map((e, i) => {

                const { dt, main, weather } = e;
                const date = new Date((dt * 1000)).toString().slice(0, 15)
                return (
                    <div className="bg-[rgba(0,0,0,0.3)] rounded-[25px] hover:bg-[rgba(0,0,0,0.4)]">
                        <div className="flex items-center justify-between days ">
                            <div>
                                <p className="text-[20px] text-white">{date}</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <TbTemperatureSun className="text-[35px] text-red-600" />
                                <p className="text-[16px] text-white">{main?.temp} &deg;C</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <img src={`https://openweathermap.org/img/wn/${weather?.[0]?.icon}@2x.png`} alt="icon" className="w-[65px]" />
                                <p className="text-[16px] text-white">Desc : {weather?.[0]?.description}</p>
                            </div>
                            <div className="flex flex-col items-center cursor-pointer" onClick={() => handleOpen(i)}>
                                <p className="text-[15px] text-gray-500 hover:text-gray-400">{open === i ? "Show less...":"More info..."}</p>
                                {open === i ? <IoIosArrowUp className="text-gray-300 text-[25px]" /> : <IoIosArrowDown className="text-gray-300 text-[25px]" />
                                }
                            </div>
                        </div>
                        {open === i && <div>
                            <HoursWiseForecast comingDaysData={comingDaysData}/>
                        </div>}
                    </div>
                )
            })}
        </div>
    )
}
export default DaysForeCast;