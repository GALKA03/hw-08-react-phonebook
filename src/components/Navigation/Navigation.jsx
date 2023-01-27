import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';
import AuthNavigation from 'components/AuthNavigation/AuthNavigation';
import { UserAuthMenu } from 'components/UserAuthMenu/UserAuthMenu';
// import { Link } from 'react-router-dom';
import * as React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton
} from '@mui/material';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import { Nav, MenuMain } from './Navigation.style';
import { backInOut } from 'popmotion';
import { createTheme } from '@mui/material/styles';

const Navigation = () => {
  const token = useSelector(selectToken);

  

const theme = createTheme({
  
  palette: {
    primary: {
      main: '#2bb354',
      darker: '#058512',
      contrastThreshold: 4.5,
    },
  },
});
  //console.log(token)
  return (
    <AppBar position="static" /*color='secondary'*/ theme={theme} >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Phonebook
        </Typography>
        <Nav>
          <MenuMain>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            {token && (
              <li>
                <NavLink to="/contacts">
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    // onClick={handleMenu}
                    color="inherit"
                  >
                    <AccountCircleSharpIcon />
                  </IconButton>
                </NavLink>
              </li>
            )}
                  </MenuMain>  
                  {token ? <UserAuthMenu /> : <AuthNavigation />}
        </Nav>
      </Toolbar>
    </AppBar>
  );
};
export default Navigation;
