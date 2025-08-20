import React from "react";
import { TbTemperatureSun } from "react-icons/tb";

const HoursWiseForecast = ({ comingDaysData }) => {

    const filData = comingDaysData?.list?.filter(e => e?.dt_txt?.slice(0, 10) === "2025-08-20");

    return (
        <div className="flex flex-wrap gap-4 cards">
            {filData?.map((e) => {
                const { dt_txt, main, weather } = e;
                return (
                    <div className="flex flex-col bg-[rgba(0,0,0,0.5)] hover:bg-[rgba(0,0,0,0.6)] w-[140px] h-[200px] rounded-[20px] hour">
                        <p className="text-white">{dt_txt?.slice(11,16)}</p>
                        <div className="flex items-center gap-1.5">
                            <TbTemperatureSun className="text-[20px] text-red-600"/>
                            <p className="text-white" >{main?.temp}</p>
                        </div>
                        <div>
                            <img className="para" src={`https://openweathermap.org/img/wn/${weather?.[0]?.icon}@2x.png`} alt="icon"/>
                            <p className="para text-gray-400 text-[15px]">Desc : {weather?.[0]?.description}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default HoursWiseForecast;