import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { AddContactForm } from './AddContactForm/AddContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (savedContacts) {
      setContacts(savedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = formState => {
    const { name, number } = formState;
    const contact = { name: name, number: number, id: nanoid(4) };

    let isNameInContacts = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isNameInContacts) {
      alert('Такое имя уже существует в контактах');
      return;
    }

    setContacts(prevContacts => [...prevContacts, contact]);
  };

  const changeFilter = event => {
    setFilter(event.target.value);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <AddContactForm onAddContact={addContact} />
      <h2>Contacts</h2>
      <Filter changeValue={changeFilter} value={filter} />
      <ContactsList
        contacts={filteredContacts}
        onDeleteButton={deleteContact}
      />
    </>
  );
};
