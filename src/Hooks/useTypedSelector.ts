import { RootReducerType } from '../Redux/Store';
import { TypedUseSelectorHook, useSelector } from 'react-redux';


export const useTypedSelector: TypedUseSelectorHook<RootReducerType> = useSelector