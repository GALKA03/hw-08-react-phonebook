import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL ='https://connections-api.herokuapp.com';
export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
        const { data } = await axios('/contacts');
         //.axios('https://63c00004e262345656f53441.mockapi.io/contacts/v1/contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/contacts`, contact);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const  updateContacts = createAsyncThunk(
  'contacts/updateContact',
  async (contact, { rejectWithValue }) => {
    try {
      const { name, number } = contact;
     const { data } = await axios.putch(`/contacts/${contact.id}`, { name, number });

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

