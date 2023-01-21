import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HomePage from 'pages/HomePage/HomePage';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import Layout from 'components/Layout/Layout';
import { fetchCurrentUser } from 'redux/auth/auth-operations';
import PrivateRoute from './HOCs/PrivateRoute';
import PublicRoute from './HOCs/PublicRoute';
import { selectIsFetchingCurrentUser } from 'redux/auth/authSelectors';





export const App = () => {
  const dispatch = useDispatch();
const isFechingCurrentUser = useSelector(selectIsFetchingCurrentUser)

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  
  return (
    <>
      {!isFechingCurrentUser && ( 
<Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/"
            element={
              <PublicRoute>
                <HomePage />
              </PublicRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute restricted>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute restricted>
                <LoginPage />
              </PublicRoute>
            }
          />
        </Route>
      </Routes>
      )}
      
    </>
  );
};
