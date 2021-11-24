import { RootReducerType } from './Store';
import { WeatherAPI } from './API';
import { WeatherAction, WeatherState, GET_WEATHER, IS_FETCHING, WeatherData } from '../Types/Types';
import { ThunkAction } from 'redux-thunk';


const initialState: WeatherState = {
    seaFilm: [],
    loading: false
}


export const WeatherReducer = (state = initialState, action: WeatherAction): WeatherState => {
    switch (action.type) {
        case GET_WEATHER:
            return {
                ...state,
                seaFilm: [action.payload]
            }
        case IS_FETCHING:
            return {
                ...state,
                loading: action.loading
            }
        default:
            return state
    }
}


export const action = {
    requestSearchWeather: (payload: WeatherData) => ({
        type: GET_WEATHER, payload
    } as const),
    setLoading: (loading: boolean) => ({
        type: IS_FETCHING, loading
    } as const)

}

export const requestWeather = (city: string): ThunkAction<Promise<void>, RootReducerType, unknown, WeatherAction> => {
    return async (dispatch) => {
        dispatch(action.setLoading(true))
        const { data } = await WeatherAPI.getSearchWeather(city)
        dispatch(action.requestSearchWeather(data))
        dispatch(action.setLoading(false))
    }
}