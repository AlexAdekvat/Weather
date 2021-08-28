import { RootReducerType } from './Store';
import { WeatherAPI } from './API';
import { WeatherAction, WeatherState, GET_WEATHER, IS_FETCHING, WeatherData, Weather } from './../Types/Types';
import { ThunkAction } from 'redux-thunk';


const initialState:WeatherState={
    data:null,
    loading:false
}


export default(state = initialState, action: WeatherAction):WeatherState=>{
    switch(action.type){
        case GET_WEATHER:
            return{
                ...state,
                data:action.payload,
                loading:false
            }
            default:
                return state
    }
}


 const action = {
      requestSearchWeather:(payload: WeatherData)=>({
          type:GET_WEATHER,payload
      } as const)
  }
export const requestWeather = (city:string): ThunkAction<Promise<void>, RootReducerType, unknown, WeatherAction> =>{
     return async (dispatch)=>{
         const responce= await WeatherAPI.getSearchWeather(city)
         dispatch(action.requestSearchWeather(responce.data))
         
     }

 }