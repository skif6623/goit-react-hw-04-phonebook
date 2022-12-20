import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactsEditor } from '../ContactsEditor/ContactsEditor';
import { ContactsList } from '../ContactsList/ContactsList';
import { ContactsFilter } from '../ContactsFilter/ContactsFilter';
import { GlobalStyle } from '../GlobalStyle';
import { BookApp } from './App.styled';

const contactsIntoBook = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
const getContactsFromStorage = () => {
  const savedStorageContacts = localStorage.getItem('contacts');
  if (savedStorageContacts !== null) {
    return JSON.parse(savedStorageContacts);
  }
  return contactsIntoBook;
};

export const App = () => {
  const [contacts, setContacts] = useState(getContactsFromStorage());
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const newContact = {
      name,
      number,
      id: nanoid(),
    };

    const duplicateContact = contacts.find(contact => contact.name === name);

    duplicateContact !== undefined
      ? alert(`${name} is alredy in contacts.`)
      : setContacts(prevContacts => [newContact, ...prevContacts]);
  };

  const changeFilter = e => {
    const { value } = e.target;

    setFilter(value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  return (
    <BookApp>
      <ContactsEditor title="Phonebook" addContact={addContact} />
      <ContactsFilter
        title="Contacts"
        filter={filter}
        changeFilter={changeFilter}
      />
      <ContactsList
        contacts={getVisibleContacts()}
        deleteContact={deleteContact}
      />
      <GlobalStyle />
    </BookApp>
  );
};

// export class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

//   componentDidMount() {
//     const initContacts = localStorage.getItem('contacts');

//     if (initContacts) {
//       this.setState({
//         contacts: JSON.parse(initContacts),
//       });
//     }
//   }

//   componentDidUpdate(_, prevState) {
//     if (prevState.contacts !== this.state.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   addContact = ({ name, number }) => {
//     const { contacts } = this.state;
//     const duplicateContact = contacts.find(contact => contact.name === name);
//     const contact = {
//       name,
//       number,
//       id: nanoid(),
//     };

//     duplicateContact !== undefined
//       ? alert(`${name} is alredy in contacts.`)
//       : this.setState(({ contacts }) => ({
//           contacts: [contact, ...contacts],
//         }));
//   };

//   changeFilter = e => {
//     const { value } = e.target;

//     this.setState({
//       filter: value,
//     });
//   };

//   getVisibleContacts = () => {
//     const { contacts, filter } = this.state;
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   render() {
//     const { filter } = this.state;
//     const visibleContacts = this.getVisibleContacts();

//     return (
//       <BookApp>
//         <ContactsEditor title="Phonebook" addContact={this.addContact} />
//         <ContactsFilter
//           title="Contacts"
//           filter={filter}
//           changeFilter={this.changeFilter}
//         />
//         <ContactsList
//           contacts={visibleContacts}
//           deleteContact={this.deleteContact}
//         />
//         <GlobalStyle />
//       </BookApp>
//     );
//   }
// }
