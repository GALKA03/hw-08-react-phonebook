import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
   },
  unset() {
    axios.defaults.headers.common.Authorization = '';
   },
 };
export const register = createAsyncThunk(
  '/users/signup',//
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', userData);
      console.log('userData', userData)
      console.log('data', {data})
        token.set(data.token)
      return data;
    } catch (error) {
      
      return rejectWithValue(error.message);
    }
  }
);
export const login = createAsyncThunk(
  '/users/login',
  async (userData, { rejectWithValue }) => {
    try {
        const { data } = await axios.post('/users/login',userData);
        token.set(data.token)
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const logout = createAsyncThunk(
  '/users/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout',);
        token.unset()
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
 export const fetchCurrentUser = createAsyncThunk(
  '/users/current',
  async (_, { rejectWithValue, getState }) => {
   const tokenLS = getState().auth.token;
    if (!tokenLS) {
      return rejectWithValue('No token');
     }
    token.set(tokenLS);
    try {
      const { data } = await axios('/users/current');
      return data;
} catch (error) {
       return rejectWithValue(error.message);
    }
  }
);


// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

// export const register = createAsyncThunk(
//   'auth/register',
//   async (userData, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.post('/users/signup', userData);
//       token.set(data.token);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

// export const login = createAsyncThunk(
//   'auth/login',
//   async (userData, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.post('/users/login', userData);
//       token.set(data.token);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

// export const logout = createAsyncThunk(
//   'auth/logout',
//   async (_, { rejectWithValue }) => {
//     try {
//       await axios.post('/users/logout');
//       token.unset();
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

