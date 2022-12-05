import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactsEditor } from './ContactsEditor/ContactsEditor';
import { ContactsList } from './ContactsList/ContactsList';
import { ContactsFilter } from './ContactsFilter/ContactsFilter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const duplicateContact = contacts.find(contact => contact.name === name);
    const contact = {
      name,
      number,
      id: nanoid(),
    };

    duplicateContact !== undefined
      ? alert(`${name} is alredy in contacts.`)
      : this.setState(({ contacts }) => ({
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
        <ContactsFilter filter={filter} changeFilter={this.changeFilter} />
        <ContactsList contacts={visibleContacts} />;
      </>
    );
  }
}
