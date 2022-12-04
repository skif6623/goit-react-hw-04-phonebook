import PropTypes from 'prop-types';

export const ContactsList = ({ contacts }) => {
  return (
    <div>
      <h1>Contacts</h1>
      <ul>
        {contacts.map(({ name, id }) => {
          return <li key={id}>{name}</li>;
        })}
      </ul>
    </div>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
