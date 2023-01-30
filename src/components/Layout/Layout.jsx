import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';
import Navigation from 'components/Navigation/Navigation';
// import AuthNavigation from 'components/AuthNavigation/AuthNavigation';
// import { UserAuthMenu } from 'components/UserAuthMenu/UserAuthMenu';
import { Outlet } from 'react-router-dom';
//import Header from 'components/Header/Header';
// import { Container,Box } from '@mui/material';
// import AuthNavigation from 'components/AuthNavigation/AuthNavigation';

const Layout = () => {
  //  const token = useSelector(selectToken);

  return (
    <>
      <Navigation />

      {/* {token ? <UserAuthMenu /> : <AuthNavigation />} */}

      <main>
        <Outlet />
      </main>
      <footer />
    </>
  );
};
export default Layout;
