import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import { ContactsEditor } from './ContactsEditor/ContactsEditor';
// import { nanoid } from 'nanoid';
import { ContactsList } from './ContactsList/ContactsList';

export class App extends Component {
  state = {
    contacts: [
      {
        name: 'Roman Tunkiv',
        id: '1',
      },
      {
        name: 'Julia Halych',
        id: '2',
      },
      {
        name: 'Emi Sobaka',
        id: '3',
      },
    ],
    name: '',
  };

  addContact = name => {
    const contact = {
      name,
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
