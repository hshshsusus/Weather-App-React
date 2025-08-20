import React, { useEffect, useState } from "react";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FiSearch } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addAQIData, addComingDaysData, addCurrentData } from "../Redux/currentSlice";
import { API_KEY } from "../utils/constants";


const Header = () => {

    const [city, setCity] =  useState('')

    const dispatch = useDispatch();

    //Current weather details
    const fetchCurrentData = async (city) => {
        const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city ? city : "mumbai"}&appid=${API_KEY}`);
        const json = await data.json();
        if(!json) return;
        dispatch(addCurrentData(json));
        const {lat,lon} = json.coord;
        fetchAQIDetails(lat, lon);
        fetchComingDaysData(lat, lon);
        setCity('');
    }

    // Fetching AQI details 
    const fetchAQIDetails =async (lat, lon) =>{
        
        const data = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
        const json = await data.json();
        dispatch(addAQIData(json));

    }

    const fetchComingDaysData = async (lat, lon) =>{

        const data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
        const json = await data.json();
        dispatch(addComingDaysData(json));
    }
// Getting input from the input field
    const handleCityName = (e) =>{
        setCity(e.target.value);
    }

    const handleSearch = () => {
        fetchCurrentData(city).catch(err);
        
    }

    useEffect(() =>{
        fetchCurrentData();
    },[])

    return (
        <div className="flex items-center justify-between h-[9vh] header bg-[rgba(0,0,0,0.8)]">
            <div className="flex items-center gap-2.5">
                <TiWeatherPartlySunny className="text-[40px] text-white" />
                <p className="text-[25px] text-white font-bold heading">Weather app</p>
            </div>
            <div className="flex items-center gap-[1px]">
                <input type="text" placeholder="Search by city..." className="w-[300px] input rounded-l-[25px]" value={city} onChange={handleCityName} />
                <FiSearch className="text-[38px] bg-black search-icon rounded-r-[25px] cursor-pointer" onClick={handleSearch}/>
            </div>
            <div>
                <button><FaUserCircle className="text-white text-[35px]"/></button>
            </div>
        </div>
    )
}
export default Header;