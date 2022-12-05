import PropTypes from 'prop-types';

export const ContactsFilter = ({ filter, changeFilter }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" value={filter} onChange={changeFilter} />
    </label>
  );
};

ContactsFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
