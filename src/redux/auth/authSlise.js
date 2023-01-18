import { register, login, logout } from './auth-operations';
import { createSlice, isAnyOf } from '@reduxjs/toolkit';

const initialState = {
    user: { name: '', email: '' },
    token: null,
    isLoading: false,
    error: null,
    
}
const authSlise =createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder =>
        builder
            .addCase(register.fulfilled, (state, { payload:{user,token} }) => {
                state.user = user;
                state.token = token;
            })
            .addCase(login.fulfilled, (state, { payload:{user,token} }) => {
                state.user = user;
                state.token = token;
            })
            .addCase(logout.fulfilled, state => {
                state.user = { name: '', email: '' };
                state.token = null
    })
    .addMatcher(
      isAnyOf(register.pending,
          login.pending,
          logout.pending),
    state => {
      state.isLoading = true;
    }
        )
    .addMatcher(
    isAnyOf(
      register.fulfilled,
      login.fulfilled,
      logout.fulfilled
    ),
    state => {
      state.isLoading = false;
      state.error = null;
    }
  )
    .addMatcher(
    isAnyOf(
      register.rejected,
      login.rejected,
      logout.rejected
    ),
    (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    }
  )
    
})
export default authSlise.reducer;