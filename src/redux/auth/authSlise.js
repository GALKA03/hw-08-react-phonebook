import { register, login, logout, fetchCurrentUser } from './auth-operations';
import { createSlice, isAnyOf } from '@reduxjs/toolkit';

const initialState = {
  user: { name: '', email: '' },
  token: null,
  isLoading: false,
  error: null,
  isFetchCurrentUser: false,
  isLoggedIn: false,
};
console.log('initialState', initialState);
const authSlise = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, (state, { payload: { user, token } }) => {
        state.user = user;
        state.token = token;
        state.isLoggedIn = true;
      })
      .addCase(login.fulfilled, (state, { payload: { user, token } }) => {
        state.user = user;
        state.token = token;
        state.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, state => {
        state.user = { name: '', email: '' };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(fetchCurrentUser.pending, state => {
        state.isFetchCurrentUser = true;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isFetchCurrentUser = false;
      })
      .addCase(fetchCurrentUser.rejected, state => {
        state.isFetchCurrentUser = false;
      })
      .addMatcher(
        isAnyOf(
          register.pending,
          login.pending,
          logout.pending,
          fetchCurrentUser.pending
        ),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          register.fulfilled,
          login.fulfilled,
          logout.fulfilled,
          fetchCurrentUser.fulfilled
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
          logout.rejected,
          fetchCurrentUser.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});
export default authSlise.reducer;
