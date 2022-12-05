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

export class ContactsEditor extends Component {
  static propTypes = {
    title: PropTypes.string,
    addContact: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    const { addContact } = this.props;

    e.preventDefault();

    addContact(this.state);

    this.resetName();
  };

  resetName = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    const { title } = this.props;

    return (
      <>
        {title && <ContactsTitle>{title}</ContactsTitle>}

        <AddForm onSubmit={this.handleSubmit}>
          <Box mb={10}>
            <FormLabel htmlFor="name">Name</FormLabel>
            <FormInput
              id="name"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={this.handleChange}
            />
          </Box>

          <Box mb={25}>
            <FormLabel htmlFor="number">Number</FormLabel>
            <FormInput
              id="number"
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              value={number}
              onChange={this.handleChange}
              required
            />
          </Box>

          <FormBtn type="submit">Add Contact</FormBtn>
        </AddForm>
      </>
    );
  }
}
