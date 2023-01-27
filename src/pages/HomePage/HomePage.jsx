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

    const sedMouth = () => {
        
    }   //const homPageOpen = token ? showUsersList() : dispatch(addContact());
     return (
         <Container maxWidth="sm">
             <Box sx={{ bgcolor: '#cfe8fc', minHeight: '500px', display: 'flex', flexDirection:'column',  justifyContent:'center'}} >
                 <Title>HELLO MY PHONEBOOK</Title>
                 {/* <Cat/> */}
                <Cont><Cat mood="excited" size={500} /></Cont> 
          </Box>
                </Container>
    )
}
export default HomePage;