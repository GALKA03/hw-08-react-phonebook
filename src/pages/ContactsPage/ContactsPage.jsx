
 import { Conteiner,Div } from 'pages/ContactsPage/ContactsPage.styles';
import { Filter } from 'components/Filter/Filter';
import Form from 'components/Form/Form';
import { Contacts } from 'components/Contacts/Contacts';
import { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import { selectIsLoading, selectError } from 'redux/contacts/contactsSelector';
import { Loader } from 'components/Loading/Loader';

export function ContactsPage() {
   const [isListShown, setIsListShown] = useState(false);
  // const [contacts, useContacts] = useState([])
  const dispatch = useDispatch();
   const isLoading = useSelector(selectIsLoading)
  const error = useSelector(selectError)


  // const showUsersList = () => {
  //   setIsListShown(true);
    
  // };

useEffect(() => {
  dispatch(fetchContacts())
   setIsListShown(true);
    }, [dispatch])

    return (
      <>
   {/* <Conteiner> */}
  
      <Div>
      <h2
        style={{
          textAlign: 'center',
          color: 'rgb(30, 149, 86)',
        }}
      >
        Contacts
      </h2>
      <Filter />
      {isLoading && <Loader/>}
       <Contacts /*showUsersList={showUsersList}*/ />
        {error && <p>{error.massage}</p>}
      </Div>
     {/* </Conteiner> */}
      </>
  );
}
export default ContactsPage;