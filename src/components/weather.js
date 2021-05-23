import moment from "moment";
import React, { useState } from "react"
import { getWeather } from "./api"


const Weather = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState({});

    const search = async (e) => {
        if (e.key == 'Enter') {
            const data = await getWeather(city)
            setWeather(data);
            setCity('');
        }

    }

    return (
        <div>
            <input type="text" placeholder="search" value={city} onChange={(e) => setCity(e.target.value)} onKeyPress={search} />
            {weather.main && (
                <div>
                    <div>
                        {weather.name}, {weather.sys.country}
                    </div>
                    <div>
                       temp: {Math.round(weather.main.temp)}
                        <span>&deg;C</span>
                    </div>
                    <div>
                        feels like: {Math.round(weather.main.feels_like)}
                        <span>&deg;C</span>
                    </div>
                    <div>
                        pressure: {weather.main.pressure}
                    </div>
                    <div>
                       Sunset: {moment(weather.sys.sunset).format('LT')}
                    </div>
                    <div>
                       Hunidity: {weather.main.humidity}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Weather