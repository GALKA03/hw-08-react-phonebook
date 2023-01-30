import { NavLink } from 'react-router-dom';
import * as React from 'react';
import { IconButton } from '@mui/material';
import { Item } from './AuthNavigation.style';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   IconButton,
//   MenuItem,
//   Menu,
// } from '@mui/material';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

const AuthNavigation = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  let activeStyle = {
    color: 'rgb(232, 241, 92)',
    fontSize: '40',
  };

  return (
    <ul>
      <Item>
        {/* <RegisterForm/> */}
        <IconButton
          size="small"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          // onClick={handleMenu}
          color="inherit"
        >
          <NavLink
            to="register"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Register
          </NavLink>
        </IconButton>
      </Item>
      <Item>
        <IconButton
          size="small"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          // onClick={handleMenu}
          color="inherit"
        >
          <NavLink
            to="login"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Login
          </NavLink>
        </IconButton>
      </Item>
    </ul>
  );
};
export default AuthNavigation;
