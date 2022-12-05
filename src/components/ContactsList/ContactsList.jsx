import PropTypes from 'prop-types';
import {
  ContactsItem,
  ContactName,
  ContactNumber,
  DeleteBtn,
} from './ContactsList.styled';

export const ContactsList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => {
        return (
          <ContactsItem key={id}>
            <ContactName>
              {name}: <ContactNumber>{number}</ContactNumber>
            </ContactName>
            <DeleteBtn type="button" onClick={() => deleteContact(id)}>
              Delete
            </DeleteBtn>
          </ContactsItem>
        );
      })}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
