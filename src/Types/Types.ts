export const GET_WEATHER = "GET_WEATHER"
export const IS_FETCHING = "IS_FETCHING"

type GetWeatherActionType = {
    type: typeof GET_WEATHER
    payload: WeatherData
}
type SetIsFetchingActionType = {
    type: typeof IS_FETCHING
    loading: boolean
}

export type WeatherAction = GetWeatherActionType|SetIsFetchingActionType


export type Weather = {
    id: number
    main: string
    description: string
    icon: string
}

export type WeatherData = {
    main: {
        temp: number
        feels_like: number
        pressure: number
        humidity: number
    }
    name: string
    sys: {
        country: string
        sunrise: number 
        sunset: number
        id:number
    }
    wind: {
        speed: number,
    }
    weather: Weather[]
}

export type WeatherState={
    seaFilm: Array<WeatherData>
    loading: boolean
}
