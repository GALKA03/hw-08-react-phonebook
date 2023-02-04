import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-operations';
// import { Box, TextField} from '@mui/system';
import { Button, Box, TextField, Paper } from '@mui/material';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };
  const handleFormSubmit = e => {
    e.preventDefault();
    dispatch(login({ email, password }));

    setEmail('');
    setPassword('');
  };
  return (
    <Paper sx={{mt:'40px'}} elevation={3}>
      <Box
        component="form"
        sx={{
          m: 1,
          width: '25ch',
          p: '40px',
          display: 'block',
          ml: 'auto',
          mr: 'auto',
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleFormSubmit}
      >
        <TextField
          sx={{ mb: '30px', bgcolor: ' rgb(237, 212, 237)' }}
          id="standard-basic"
          label="Email:"
          variant="filled"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <TextField
          sx={{ bgcolor: ' rgb(237, 212, 237)' }}
          id="standard-basic"
          label="Password:*********"
          variant="filled"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />

              <Button onClick={handleFormSubmit} sx={{
                  bgcolor: 'rgb(237, 212, 237)', mt: '30px',
                  display:'block', ml:'auto', mr:'auto', minWidth:'70px'
              }} > Login</Button>
      </Box>
    </Paper>
  );
};
