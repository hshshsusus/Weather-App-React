import React from "react";
import { useSelector } from "react-redux";
import { TbTemperatureSun } from "react-icons/tb";
import { TfiTime } from "react-icons/tfi";
import { FaCalendarDays } from "react-icons/fa6";
import getTime from "../utils/constants";
import DaysForeCast from "./DaysForeCast";

const Main = () => {

    const { currentData, AQIData, comingDaysData } = useSelector(store => store.current);
   
    if (!currentData || !AQIData) return;

    //Destructuring the properties
    const { name, dt, timezone, sys, main, weather } = currentData;
    const { sunrise, sunset } = sys;
    const { co, no2, so2, o3 } = AQIData?.list?.[0].components;

    const date = new Date(dt * 1000);

    return (
        <>
            <div className="absolute top-8 left-14 w-[90%] h-[85%] rounded-[20px] bg-[rgba(0,0,0,0.2)] flex flex-col justify-between main">
                <div className="flex items-center justify-between city">
                    <div className="flex flex-col gap-2.5 city1">
                        <p className="text-[40px] text-white font-semibold">{name}. {sys?.country}</p>
                        <img src="/assets/cloudy.png" alt="" className="w-[65px]" />
                        <div className="flex items-center gap-[18px]">
                            <FaCalendarDays className="text-[25px] text-red-600" />
                            <p className="text-[22px] text-white">{date?.toString()?.slice(0, 15)}</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <TfiTime className="text-[25px] text-red-600 font-bold" />
                            <p className="text-[22px] text-white">{getTime(dt, timezone)}</p>
                        </div>
                    </div>
                    <div
                        className="flex flex-col gap-5 temp ">
                        <p className="text-[25px] text-white font-semibold">Today</p>
                        <img src={`https://openweathermap.org/img/wn/${weather?.[0]?.icon}@2x.png`} alt="sun" className="w-[110px] icon" />
                        <div className="flex items-center gap-4 temp-icon">
                            <TbTemperatureSun className="text-[28px] text-red-600" />
                            <p className="text-white text-[20px]">{main?.temp}&deg;C</p>
                        </div>
                        <p className="text-[18px] text-white">Feels like : {main?.feels_like}</p>

                        <p className="text-[18px] text-white">Desc : {weather?.[0]?.description}</p>
                    </div>
                </div>
                <div className="flex items-center justify-between gap-6 aqi-rise">
                    <div className="bg-[rgba(0,0,0,0.7)] aqi rounded-[10px] w-1/2">
                        <p className="text-[20px] text-white font-bold">Air quality index (AQI)</p>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-[18px] text-white">CO</p>
                                <p className="text-gray-400">{co && co}</p>
                            </div>
                            <div>
                                <p className="text-[18px] text-white">No2</p>
                                <p className="text-gray-400">{no2 && no2}</p>
                            </div>
                            <div>
                                <p className="text-[18px] text-white">SO2</p>
                                <p className="text-gray-400">{so2 && so2}</p>
                            </div>
                            <div>
                                <p className="text-[18px] text-white">O3</p>
                                <p className="text-gray-400">{o3 && o3}</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[rgba(0,0,0,0.7)] w-1/2 sunrise rounded-[10px] flex items-center gap-[30px] justify-between">
                        <div className="flex flex-col gap-[10px]">
                            <p className="text-[20px] text-white font-bold">Sunrise</p>
                            <div className="flex items-center gap-[5px]">
                                <img src="/assets/sun1.png" alt="sunrise" className="w-[35px]" />
                                <p className="text-[18px] text-gray-400 time">{getTime(dt, sunrise)}</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[15px]">
                            <p className="text-[20px] text-white font-bold">Sunset</p>
                            <div className="flex items-center gap-[5px]">
                                <img src="/assets/cloud1.png" alt="" className="w-[35px]" />
                                <p className="text-[18px] text-gray-400 time">{getTime(dt, sunset)}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <DaysForeCast comingDaysData={comingDaysData}/>
        </>
    )
}
export default Main;