import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = "45a1804cf811593a6b8ab223c862ac99";

export const getWeather = async (city) =>{
    const {data} = await axios.get(URL, {
        params:{
            q: city,
            units: 'metric',
            appid: API_KEY
        }
    });
    return data
}