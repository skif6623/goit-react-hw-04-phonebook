import PropTypes from 'prop-types';

export const ContactsList = ({ contacts }) => {
  console.log(contacts);
  return (
    <div>
      <h1>Contacts</h1>
      <ul>
        {contacts.map(({ name, number, id }) => {
          return (
            <li key={id}>
              {name}: {number}
            </li>
          );
        })}
      </ul>
    </div>
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