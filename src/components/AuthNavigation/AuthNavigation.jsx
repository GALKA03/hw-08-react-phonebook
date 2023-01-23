import { Link } from 'react-router-dom';
import * as React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Menu,
} from '@mui/material';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

const AuthNavigation = () => {
    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
      <ul>
          
      <li>
        {/* <RegisterForm/> */}
         <Link to="register" >Register</Link>
        
      </li>
      <li>
        <Link to="login">Login</Link>
      </li>
    </ul>
  );
};
export default AuthNavigation;
