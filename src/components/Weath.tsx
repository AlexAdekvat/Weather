import React, { FC, FormEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTypedSelector } from '../Hooks/useTypedSelector'
import { action, requestWeather } from '../Redux/WeatherReducer'
import Preloader from './Preloader'
import styles from "./weather.module.scss"
import moment from "moment";
import { RootReducerType } from '../Redux/Store'
import { WeatherData } from '../Types/Types'



const Weather: FC = () => {
    const [city, setCity] = useState('minsk');
    //const [loading, setLoding] = useState(false)
    //const { data, loading } = useTeypdSelector(state => state.weather)
    const search = useSelector<RootReducerType, Array<WeatherData>>(state => state.weather.seaFilm);
    const loading = useSelector<RootReducerType>(state => state.weather.loading);

    const dispatch = useDispatch()

    const handleClick = () => {
        if (city.trim() === '') {
            alert('Enter city') // There must be a error
        }
        dispatch(requestWeather(city))
        setCity('')

    }



    return (
        <div className={styles.maincontent}>
            <div className={styles.field}>
                <input type="text" placeholder="Search" value={city} onChange={(e) => setCity(e.target.value)} />
                <button onClick={handleClick} >Search</button>
            </div>

            <div>
                {/* {loading ? <h1 style={{color:'reв'}}></h1>: */}
                {loading ? <Preloader/>:
                    (search.map(({ name, main, weather }) => {
                        return (
                            <div>
                                <div> {name}</div>
                                <div> {Math.round(main.temp)}</div>
                                <div> {main.pressure}</div>
                                <div>
                                    <img src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt={weather[0].icon} />
                                </div>
                            </div>
                        )
                    }))
                }
            </div>

        </div>
    )
}

export default Weather



//  <div>
// <div>
//                 {data && (
//                     (loading ? <Preloader /> :
//                         <div className={styles.container}>
//                             <div className={styles.info}>
//                                 <div className={styles.main}>
//                                     <div >
//                                         {Math.round(data.main.temp)}
//                                         <span>&deg;</span>
//                                     </div>
//                                     {data?.name} {data.sys.country}
//                                     <div>
//                                         <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt={data.weather[0].description} />

//                                      </div>
//                                  </div>
//                                  <div className={styles.datamain}>
//                                      <div className={styles.datd}>
//                                          <div >
//                                              Feels like: {Math.round(data.main.feels_like)}
//                                              <span>&deg;C</span>
//                                          </div>
//                                          <div className={styles.pressure}>
//                                              Pressure: {data.main.pressure}
//                                          </div>
//                                          <div className={styles.speed}>
//                                              Wind: {data.wind.speed}m/s
//                                          </div>
//                                      </div>
//                                      <div>
//                                          <div>
//                                              Humidity: {data.main.humidity}%
//                                          </div>
//                                          <div>
//                                              Sunrise: {moment(data.sys.sunrise * 1000).format('LT')}
//                                          </div>
//                                          <div>
//                                              Sunset: {moment(data.sys.sunset * 1000).format('LT')}
//                                          </div>
//                                      </div>
//                                  </div>
//                              </div>
//                          </div >

//                      )
//                  )}
//              </div>

//              {/* <p>{data?.weather[0].description}</p> 