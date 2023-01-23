import { Box, Container } from '@mui/system';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contacts-operations';
import Form from 'components/Form/Form';
import { Contacts } from 'components/Contacts/Contacts';


const HomePage = () => {
    const [isListShown, setIsListShown] = useState(false);
    const [contacts, useContacts] = useState([])
    
    
    const contactsAdd = useSelector(addContact);
    const dispatch = useDispatch();

    const showUsersList = () => {
    setIsListShown(true);
    dispatch(addContact())
  };
     return (
         <Container maxWidth="sm">
    <Box sx={{ bgcolor: '#cfe8fc', height: '200vh' }} >
 
                 <h1>HELLO HOMEPAGE</h1>
                     <div>
      <h2
        style={{
          textAlign: 'center',
          color: 'rgb(30, 149, 86)',
          bacgroundColor: 'green',
        }}
      >
        Phonebook
        </h2>
        <Form />
                 </div>
                 {contactsAdd && <Contacts showUsersList={showUsersList} />}
          </Box>
                </Container>
    )
}
export default HomePage;