import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//axios.defaults.baseURL ='https://63c00004e262345656f53441.mockapi.io/contacts/v1';
export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
        const { data } = await axios('https://63c00004e262345656f53441.mockapi.io/contacts/v1/contacts');
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
      await axios.delete(`https://63c00004e262345656f53441.mockapi.io/contacts/v1/contacts/${id}`);
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
      const { data } = await axios.post(`https://63c00004e262345656f53441.mockapi.io/contacts/v1/contacts`, contact);
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
      await axios.put(`https://63c00004e262345656f53441.mockapi.io/contacts/v1/${contact.id}`);
      return contact;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

