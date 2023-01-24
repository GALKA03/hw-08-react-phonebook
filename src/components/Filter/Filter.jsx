import { Label, Input } from './Filter.style';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contacts/contactsSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <Label>
      Find contacts by name
      <br />
      <Input
        type="text"
        onChange={e => dispatch(changeFilter(e.target.value))}
        name="filter"
        placeholder="enter name"
      />
    </Label>
  );
};
