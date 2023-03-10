//import Notiflix from 'notiflix';
import {
  Item,
  Btn,
  Contact,
  Span,
  BtnUpdate,
  ContainerBtn
} from 'components/Contacts/Contacts.style';
import DeleteOutlineSharpIcon from '@mui/icons-material/DeleteOutlineSharp';
//import UpdateSharpIcon from '@mui/icons-material/UpdateSharp';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-operations';
import UpdateIcon from '@mui/icons-material/Update';
import { IconButton } from '@mui/material';
import { Stack } from '@mui/system';
import { useState } from 'react';
import { selectVisibleContacts } from 'redux/contacts/contactsSelector';
import { UpdateForm } from 'components/UpdateForm.jsx/UpdateForm';

export const Contacts = () => {
  const [userToUpdate, setUserToUpdate] = useState(null);
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  const showUpdateForm = contactsID => {
    const contact = contacts.find(({ id }) => id === contactsID);
    setUserToUpdate(contact);
  };
  const closeForm = () => {
    setUserToUpdate(null);
  };
  return (
   <Stack
  direction="column"
  justifyContent="space-around"
  alignItems="stretch"
   spacing={1}
 >
      {contacts &&
        contacts.map(({ name, number, id, children /*avatar*/ }) => {
  
          return (
            <Item key={id}>
              {/* <Img src={avatar} alt="avatar" />       */}
              <Contact>
                {' '}
                <Span>{name}:</Span>
                {number}{' '}
              </Contact>
              <ContainerBtn>
              <Btn
                onClick={() => {
                  dispatch(deleteContact(id));
                }}
              >
                <DeleteOutlineSharpIcon />
              </Btn>
              {children}
              <BtnUpdate onClick={() => showUpdateForm(id)}>
                <UpdateIcon />
              </BtnUpdate>
              {userToUpdate && userToUpdate.id === id && (
                <UpdateForm userToUpdate={userToUpdate} closeForm={closeForm} />
                )}
                </ContainerBtn>
            </Item>
          );
        })}
    </Stack>
  );
};

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
//}
