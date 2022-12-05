import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactsEditor } from './ContactsEditor/ContactsEditor';
import { ContactsList } from './ContactsList/ContactsList';

export class App extends Component {
  state = {
    contacts: [
      {
        name: 'Roman Tunkiv',
        number: '+380687635137',
        id: '1',
      },
      {
        name: 'Julia Halych',
        number: '+380687635137',
        id: '2',
      },
      {
        name: 'Emi Sobaka',
        number: '+380687635137',
        id: '3',
      },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const contact = {
      name,
      number,
      id: nanoid(),
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  changeFilter = e => {
    const { value } = e.target;

    this.setState({
      filter: value,
    });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <ContactsEditor addContact={this.addContact} />
        <label>
          <input type="text" value={filter} onChange={this.changeFilter} />
        </label>
        <ContactsList contacts={visibleContacts} />;
      </>
    );
  }
}
