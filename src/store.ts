import { configureStore } from '@reduxjs/toolkit'
import providerReducer from './slice/providerSlice'
import { useDispatch } from 'react-redux'

const store = configureStore({
    reducer: {
        providers: providerReducer
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()