import React from "react";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FiSearch } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
    return (
        <div className="flex items-center justify-between h-[9vh] header bg-[rgba(0,0,0,0.8)]">
            <div className="flex items-center gap-2.5">
                <TiWeatherPartlySunny className="text-[40px] text-white"/>
                <p className="text-[25px] text-white font-bold">Weather app</p>
            </div>
            <div className="flex items-center gap-[1px]">
                <input type="text" placeholder="Search by city..." className="w-[300px] input rounded-l-[25px]"/>
                <FiSearch className="text-[38px] bg-black search-icon rounded-r-[25px]"/>
            </div>
            <div>
                <FaUserCircle className="text-white text-[35px]"/>
            </div>
        </div>
    )
}
export default Header;