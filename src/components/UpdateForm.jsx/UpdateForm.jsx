import { useDispatch } from 'react-redux';
import { updateContacts } from 'redux/contacts/contacts-operations'; 
import { useState } from 'react';

export const UpdateForm = ({ closeForm, userToUpdate }) => {
  const [name, setName] = useState(userToUpdate.name);
  const [number, setNumber] = useState(userToUpdate.number);

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(
      updateContacts({
        ...userToUpdate,
        name,
        number,
      })
    );
    closeForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={handleChange} />
      </label>
      <label>
        Number:
        <input
          type="number"
          name="number"
          value={number}
          onChange={handleChange}
        />
      </label>
      <button>Save</button>
    </form>
  );
};