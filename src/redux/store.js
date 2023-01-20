import authReduser from './auth/authSlise'
import { configureStore } from '@reduxjs/toolkit'
export const store = configureStore({
    reducer: {
    auth: authReduser
}
})