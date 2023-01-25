import {
  fetchContacts,
  deleteContact,
  addContact,
  updateContacts
} from './contacts-operations';
import { createSlice, isAnyOf } from '@reduxjs/toolkit';

const contactsSlise = createSlice({
  name: 'contacts',
  initialState: { contacts: [], isLoading: false, error: null, filter: '' },
  reducers: {
    changeFilter: (state, { payload }) => {
      state.filter = payload;
    }
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.contacts = payload;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.contacts = state.contacts.filter(({ id }) => id !== payload);
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.contacts = [...state.contacts, payload];
      })
       .addCase(updateContacts.fulfilled, (state, { payload }) => {
        const index = state.contacts.findIndex(contact => contact.id === payload.id);
        state.contacts[index] = payload;
      })
  .addMatcher(
      isAnyOf(fetchContacts.pending,
          deleteContact.pending,
        addContact.pending,
      updateContacts.pending),
    state => {
      state.isLoading = true;
    }
      )
    .addMatcher(
    isAnyOf(
      fetchContacts.fulfilled,
      deleteContact.fulfilled,
      addContact.fulfilled,
      updateContacts.fulfilled
    ),
    state => {
      state.isLoading = false;
      state.error = null;
    }
  )
  .addMatcher(
    isAnyOf(
      fetchContacts.rejected,
      deleteContact.rejected,
      addContact.rejected,
      updateContacts.rejected
    ),
    (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    }
  )
});
//export const { addContacts, deleteContacts } = contactsSlice.actions;
export const { changeFilter } = contactsSlise.actions;
export default contactsSlise.reducer;