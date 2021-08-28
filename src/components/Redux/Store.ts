import {combineReducers, createStore, applyMiddleware} from "redux"
import {composeWithDevTools} from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import WeatherReducer from "./WeatherReducer"

const rootReducer = combineReducers({
    weather: WeatherReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))

export type RootReducerType = ReturnType<typeof rootReducer>

export default store