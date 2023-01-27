import * as React from 'react';
import { Button,TextField, Dialog,DialogActions,DialogContent, DialogTitle} from '@mui/material'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "redux/auth/auth-operations";
import { Btn } from './RegisterForm.style';

export const RegisterForm = () => {
    const dispatch = useDispatch();
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


    const handleChange = ({ target: { name, value} }) => {
        switch(name){
            case 'name':
                setName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                break
        }
    }
    const handleFormSubmit = (e) => {
        e.preventDefault()
        dispatch(register({ name, email, password }))
        setName('')
        setEmail('')
        setPassword('')
    }

  return (
    <div>
      <Btn /*sx={{ml:'auto', mr:'auto'}} variant="outlined" /*size="large"*/ onClick={handleClickOpen}>
       Register please
      </Btn>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
              <DialogContent>  
              <form onSubmit={handleFormSubmit}>
            
    
                <TextField  margin='normal'  label="Name" fullWidth autoFocus type="text" name="name" value={name} onChange={handleChange} />
      
        
            
                <TextField margin='normal' label="Email Address" fullWidth autoFocus type="email" name="email" value={email} onChange={handleChange} />
         
           
                <TextField margin='normal' label="Password"fullWidth autoFocus type="password" name="password" value={password} onChange={handleChange} />
          <DialogActions>
                          <Button onClick={handleFormSubmit}>Register</Button>
        </DialogActions>
        </form>
          {/* <DialogContentText>
           
          </DialogContentText> */}
        
        </DialogContent>
       
          {/* <Button onClick={handleClose}>Cancel</Button> */}
          {/* <Button onClick={handleClose}>Subscribe</Button> */}
        
      </Dialog>
    </div>
  );





    
}