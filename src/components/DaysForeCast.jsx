import React from "react";

const DaysForeCast = ({comingDaysData}) =>{

    const filData = comingDaysData?.list.filter(e => e?.dt_txt.slice(11) === "21:00:00");
    console.log("dt", filData)
    return(
        <>
        DaysForecast
        </>
    )
}
export default DaysForeCast;