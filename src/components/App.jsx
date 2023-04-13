import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from './Loading/Loader';
import Layout from 'components/Layout/Layout';
import { fetchCurrentUser } from 'redux/auth/auth-operations';
import { PrivateRoute } from './HOCs/PrivateRoute';
import { PublicRoute } from './HOCs/PublicRoute';
import { selectIsFetchCurrentUser } from 'redux/auth/authSelectors';

import HomePage from 'pages/HomePage/HomePage';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import LoginPage from 'pages/LoginPage/LoginPage';



export const App = () => {
  //const [data, setData] = React.useState(null);


  const dispatch = useDispatch();
  const isFechingCurrentUser = useSelector(selectIsFetchCurrentUser);

  // useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);


  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {isFechingCurrentUser ? (
         <Loader/>
      ):
        (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
<Route
          path="/register"
          element={
            <PublicRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
          </Route>
        </Routes>
      )}
    </>
  );
};
