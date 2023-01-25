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
    { contacts &&
    contacts.map(({ name, number, id, }) => {
      console.log(id)
      return (
                
        <Item key={id}>
                     
          <Contact >  <Span>{name}:</Span>{number} </Contact>
          <Btn onClick={() => { dispatch(deleteContact(id)) }}>X</Btn>
          {children}
        </Item>)
    }
    ))
}
 
  
            







//     <Stack
//   direction="column"
//   justifyContent="space-around"
//   alignItems="stretch"
//   spacing={1}
// >
          //  {/* {contacts &&   
      //       contacts.map(({ name, number, id, avatar, children }) => {
      //         return (
                
      //               <Item key={id}>   
      //                 <Img src={avatar} alt="avatar" />
      //                  <Contact >  <Span>{name}:</Span>{number} </Contact>
      //                      <Btn onClick={() => {dispatch(deleteContact(id)) }}>X</Btn>
      // {children}
      //           </Item>) */}
            
            // } 
    //  )}
    // </Stack>
           

    // )
}