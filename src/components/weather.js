import moment from "moment";
import React, { useState } from "react"
import { getWeather } from "./api"
import styles from "./weather.module.scss"


const Weather = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState({});

    const search = async (e) => {
        if (e.key === 'Enter') {
            const data = await getWeather(city)
            setWeather(data);
            setCity('');
        }
    }

    return (
        <div className={styles.maincontent}>
            <div className={styles.field}>
                <input type="text" placeholder="Search" value={city} onChange={(e) => setCity(e.target.value)} onKeyPress={search} />
            </div>
            {weather.sys && (
                <div className={styles.container}>
                    <div className={styles.info}>
                        <div className={styles.main}>
                            <div >
                                {Math.round(weather.main.temp)}
                                <span>&deg;</span>
                            </div>
                            {weather.name} {weather.sys.country}
                            <div>
                                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                                {/* <p>{weather.weather[0].description}</p> */}
                            </div>
                        </div>
                        <div className={styles.datamain}>
                            <div className={styles.datd}>
                                <div >
                                    Feels like: {Math.round(weather.main.feels_like)}
                                    <span>&deg;C</span>
                                </div>
                                <div className={styles.pressure}>
                                    Pressure: {weather.main.pressure}
                                </div>
                                <div className={styles.speed}>
                                    Wind: {weather.wind.speed}m/s
                                </div>
                            </div>
                            <div>
                                <div>
                                    Humidity: {weather.main.humidity}%
                                </div>
                                <div>
                                    Sunrise: {moment(weather.sys.sunrise * 1000).format('LT')}
                                </div>
                                <div>
                                    Sunset: {moment(weather.sys.sunset * 1000).format('LT')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            )}
        </div>
    )
}

export default Weather