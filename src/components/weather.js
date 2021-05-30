import moment from "moment";
import React, { useState } from "react"
import { getWeather } from "./api"
import styles from "./weather.module.scss"


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
    // const sun = ()=>{
    //     const date = new Date(sun).toLocaleTimeString()
    // }

    return (
        <div className={styles.maincontent}>
            <div className={styles.input}>
                <input type="text" placeholder="search" value={city} onChange={(e) => setCity(e.target.value)} onKeyPress={search} />
            </div>
            {weather.main && (
                <div className={styles.container}>
                    <div className={styles.info}>
                        <div>
                            {weather.name}, {weather.sys.country}
                        </div>
                        <div>
                            Temp: {Math.round(weather.main.temp)}
                            <span>&deg;C</span>
                        </div>
                        <div>
                            Feels like: {Math.round(weather.main.feels_like)}
                            <span>&deg;C</span>
                        </div>
                        <div className={styles.pressure}>
                            Pressure: {weather.main.pressure}
                        </div>
                        <div>
                            Humidity: {weather.main.humidity}
                        </div>
                        <div>
                            Sunset: {moment(weather.sys.sunset).format('LT')}
                        </div>
                        <div>
                            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                            <p>{weather.weather[0].description}</p>
                        </div>
                    </div>

                </div>
            )}
        </div>
    )
}

export default Weather