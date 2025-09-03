import { configureStore } from '@reduxjs/toolkit'
import registerReducer from './features/users/registerSlice'
import loginReducer from './features/users/loginSlice'

export const store = configureStore({
    reducer: {
        signup: registerReducer,
        login: loginReducer
    }
})