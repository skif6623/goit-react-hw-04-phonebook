import PropTypes from 'prop-types';

export const ContactsList = ({ contacts, deleteContact }) => {
  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(({ name, number, id }) => {
          return (
            <li key={id}>
              {name}: {number}
              <button type="button" onClick={() => deleteContact(id)}>
                Delete
              </button>
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
