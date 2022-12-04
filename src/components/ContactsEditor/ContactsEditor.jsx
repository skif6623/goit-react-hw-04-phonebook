import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ContactsEditor extends Component {
  static propTypes = {
    addContact: PropTypes.func.isRequired,
  };

  state = {
    name: '',
  };

  handleChange = e => {
    const { value } = e.currentTarget;

    this.setState({ name: value });
  };

  handleSubmit = e => {
    const { name } = this.state;
    const { addContact } = this.props;

    e.preventDefault();

    addContact(name);

    this.resetName();
  };

  resetName = () => {
    this.setState({
      name: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Add Contact</button>
      </form>
    );
  }
}
