import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contacts/contactsSlice';
//import filterReduser from './filter/filterSlice'
import authReduser from './auth/authSlise';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'], 
};
const contactsPersistConfig = {
  key: 'contacts',
  storage,
   whitelist: ['contacts'] // blacklist: ['filter']
}
export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReduser),
    contacts: persistReducer(contactsPersistConfig, contactsReducer)
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
