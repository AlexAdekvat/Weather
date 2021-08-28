import react, { FC, FormEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTypedSelector } from './Hooks/useTypedSelector'
import { RootReducerType } from './Redux/Store'
import { requestWeather } from './Redux/WeatherReducer'
import { WeatherData } from './Types/Types'

// interface WeatherProps{
//     data:WeatherData
// }

const Weather: FC = () => {
     const [city, setCity] = useState('');
    const [searchValue, setSearchValue] = useState('minsk');


     const {loading,data} = useTypedSelector(state => state.weather)

    //const search = useSelector<RootReducerType>(state => state.weather.data)
    console.log(data);

    const dispatch = useDispatch()

    // console.log(state);

    useEffect(() => {
        dispatch(requestWeather(city))


    }, [])
     const handleClick = () => {
        dispatch(requestWeather(city))

        console.log('click');
        
     }


    return (
        <div>
             <input type="text" placeholder="Search" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
            
            <button onClick={handleClick} >Search</button> 
            <div>
                 <div> 
                    {data?.name}
                 </div> 
                 <div> {data?.main.temp} </div>

            </div>

        </div>
    )
}

export default Weather