import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ContactsTitle,
  AddForm,
  FormLabel,
  FormInput,
  FormBtn,
} from './ContactsEditor.styled';
import { Box } from 'components/Box';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const initialValues = {
  name: '',
  number: '',
};

export const ContactsEditor = ({ title, addContact }) => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    addContact(values);

    resetForm();
  };

  return (
    <>
      {title && <ContactsTitle>{title}</ContactsTitle>}
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Box mb={10}>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Field id="name" type="text" name="name" />
          </Box>

          <Box mb={25}>
            <FormLabel htmlFor="number">Number</FormLabel>
            <Field id="number" type="tel" name="number" />
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
