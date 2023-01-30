import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';
import AuthNavigation from 'components/AuthNavigation/AuthNavigation';
import { UserAuthMenu } from 'components/UserAuthMenu/UserAuthMenu';
// import { Link } from 'react-router-dom';
import {Items} from 'components/Navigation/Navigation.style'
import * as React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton
} from '@mui/material';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import { Nav, MenuMain } from './Navigation.style';
//import { backInOut } from 'popmotion';
import { createTheme } from '@mui/material/styles';

const Navigation = () => {
  const token = useSelector(selectToken);

  

const theme = createTheme({
  
  palette: {
    primary: {
      main: '#2bb354',
      darker: '#058512',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});

      let activeStyle = {
     
    textDecoration: "underline",
    color: "white",
    fontSize: '30',

  };
  
  //console.log(token)
  return (
    <AppBar position="static" /*color='secondary'*/ theme={theme} >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color:'white', fontSize:'30px' }}>
          Phonebook
        </Typography>
        <Nav>
          <MenuMain>
            <Items>
              <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    // onClick={handleMenu}
                    color="inherit"
                  >
              <NavLink to="/"   style={({ isActive }) =>isActive ? activeStyle : undefined}>Home</NavLink>
           </IconButton>
            </Items>

            {token && (
              <Items>
                <NavLink to="/contacts"  style={({ isActive }) =>isActive ? activeStyle : undefined}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    // onClick={handleMenu}
                    color="inherit"
                  >
                    <AccountCircleSharpIcon />
                    <p >Contacts</p>
                  </IconButton>
                </NavLink>
              </Items>
            )}
                  </MenuMain>  
                  {token ? <UserAuthMenu /> : <AuthNavigation />}
        </Nav>
      </Toolbar>
    </AppBar>
  );
};
export default Navigation;
