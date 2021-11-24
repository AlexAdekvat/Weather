import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/',
})

export const WeatherAPI = {
    getSearchWeather(city:string)  {
        return instance.get(`weather?q=${city}&units=metric&appid=49e826cabdf4fd9e3444934e373c51b4`)

    }
}
