//import Notiflix from 'notiflix';
import {Item, Btn,Contact,Span, Img } from 'components/Contacts/Contacts.style'
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-operations';
//import { selectContacts } from 'redux/contacts/contactsSelector';
//import { selectFilter } from 'redux/filter/filterSelector';
import { Stack } from '@mui/system';
import { selectVisibleContacts } from 'redux/contacts/contactsSelector';

export const Contacts = () => {   
  const contacts = useSelector(selectVisibleContacts)
  const dispatch = useDispatch();
  
  
  return ( 
    <Stack
  direction="column"
  justifyContent="space-around"
  alignItems="stretch"
  spacing={1}
>
           {contacts &&   
            contacts.map(({ name, number, id, avatar, children }) => {
              return (
                
                    <Item key={id}>   
                      <Img src={avatar} alt="avatar" />
                       <Contact >  <Span>{name}:</Span>{number} </Contact>
                           <Btn onClick={() => {dispatch(deleteContact(id)) }}>X</Btn>
      {children}
       </Item>)} 
     )}
    </Stack>
           

    )
}



// ContactsItem.prototype = {
//     name: PropTypes.string.isRequired,
//     number: PropTypes.number.isRequired,
//     onRemove: PropTypes.func,
//  id:PropTypes.func
// }
// Contacts.prototype = {
//     contacts: PropTypes.func,
//     onRemove:PropTypes.func
// }