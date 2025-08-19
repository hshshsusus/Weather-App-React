const getTime = (dt, timezone) =>{

    const time = new Date((dt + timezone) * 1000);
    return time.toString().slice(16, 21);
}

export default getTime;

export const API_KEY = "69e06dc231ce81bbd4664da93610da6e&units=metric";