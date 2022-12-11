import PropTypes from 'prop-types';
import {
  ContactsTitle,
  AddForm,
  FormLabel,
  FormInput,
  FormBtn,
  Error,
} from './ContactsEditor.styled';
import { Box } from 'components/Box';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().min(9).max(13).required(),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactsEditor = ({ title, addContact }) => {
  const handleSubmit = (values, { resetForm }) => {
    addContact(values);

    resetForm();
  };

  return (
    <>
      {title && <ContactsTitle>{title}</ContactsTitle>}
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form as={AddForm}>
          <Box mb={10}>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Field as={FormInput} id="name" type="text" name="name" />
            <ErrorMessage name="name">
              {msg => <Error>Введи ім'я, Собако</Error>}
            </ErrorMessage>
          </Box>

          <Box mb={25}>
            <FormLabel htmlFor="number">Number</FormLabel>
            <Field as={FormInput} id="number" type="tel" name="number" />
            <ErrorMessage name="number" />
          </Box>

          <FormBtn type="submit">Add Contact</FormBtn>
        </Form>
      </Formik>
    </>
  );
};

ContactsEditor.propTypes = {
  title: PropTypes.string,
  addContact: PropTypes.func.isRequired,
};
