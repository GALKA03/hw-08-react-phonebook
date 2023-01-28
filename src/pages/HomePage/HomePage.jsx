import { Box, Container } from '@mui/system';
import { Cat } from 'react-kawaii';
import {Cont,Title} from 'pages/HomePage/HomePage.style'
// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addContact } from 'redux/contacts/contacts-operations';
// //import Form from 'components/Form/Form';
//import { Contacts } from 'components/Contacts/Contacts';
// import { selectToken } from 'redux/auth/authSelectors';
//import  Cat from 'components/animation/Cat'
const HomePage = () => {

     //const homPageOpen = token ? showUsersList() : dispatch(addContact());
     return (
         <Container maxWidth="100%">
             <Box sx={{ bgcolor: '#daf5d6', minHeight: '100%', display: 'flex', flexDirection:'column',  justifyContent:'center'}} >
                 <Title>HELLO MY PHONEBOOK</Title>
                 {/* <Cat/> */}
                <Cont><Cat mood="excited" size={400} /></Cont> 
          </Box>
                </Container>
    )
}
export default HomePage;