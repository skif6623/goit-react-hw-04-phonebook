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
    name: '',
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

  render() {
    const { contacts } = this.state;
    return (
      <>
        <ContactsEditor addContact={this.addContact} />
        <ContactsList contacts={contacts} />;
      </>
    );
  }
}
