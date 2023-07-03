import React, { useState } from 'react';

export const AddContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const updateInputState = event => {
    switch (event.target.name) {
      case 'name': {
        setName(event.target.value);
        break;
      }
      case 'number': {
        setNumber(event.target.value);
        break;
      }
      default: {
        break;
      }
    }
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        onAddContact({ name, number });
        resetForm();
      }}
    >
      <label>
        Name
        <input
          onChange={updateInputState}
          type="text"
          name="name"
          pattern="^[A-Za-z\u0080-\uFFFF ']+$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          onChange={updateInputState}
          name="number"
          value={number}
          pattern="^(\+?[0-9.\(\)\-\s]*)$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        ></input>
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};
