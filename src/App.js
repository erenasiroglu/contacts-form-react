import { useState, useEffect } from 'react';
import Form from './components/Form';
import List from './components/List';
import './App.css';

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullName: 'Eren',
      phoneNumber: '123456',
    },
    {
      fullName: 'GitHub',
      phoneNumber: '123456',
    },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div className="contacts-container">
      <div className="list-container">
        <List contacts={contacts} />
      </div>
      <div className="form-container">
        <Form addContact={setContacts} contacts={contacts} />
      </div>
    </div>
  );
}

export default Contacts;
