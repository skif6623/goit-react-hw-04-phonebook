import PropTypes from 'prop-types';
import {
  ContactsTitle,
  FormLabel,
  FormInput,
} from '../ContactsEditor/ContactsEditor.styled';
import { Box } from '../Box';

export const ContactsFilter = ({ title, filter, changeFilter }) => {
  return (
    <>
      {title && <ContactsTitle>Contacts</ContactsTitle>}
      <Box mb={20}>
        <FormLabel htmlFor="filter">Find contacts by name</FormLabel>
        <FormInput
          id="filter"
          type="text"
          value={filter}
          onChange={changeFilter}
        />
      </Box>
    </>
  );
};

ContactsFilter.propTypes = {
  title: PropTypes.string,
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
