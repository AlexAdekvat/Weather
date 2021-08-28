import axios from "axios";
import { WeatherData } from "../Types/Types";

const instance = axios.create({
    baseURL: 'https://api.openweathermap.org/',

})

export const WeatherAPI = {
    getSearchWeather(city:string)  {
        //return instance.get(`data/2.5/weather?q=${city}&appid=49e826cabdf4fd9e3444934e373c51b4`)
        return instance.get(`data/2.5/weather?q=london&appid=49e826cabdf4fd9e3444934e373c51b4`)
    }
}
