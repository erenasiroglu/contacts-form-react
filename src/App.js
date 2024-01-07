import { useState, useEffect } from 'react';
import Form from './components/Form'
import List from './components/List';

function Contacts() {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    console.log(contacts)
  }, [contacts])
  return (
    <div>
      <List/>
      <Form addContact={setContacts} contacts={contacts}/>
    </div>
  );
}

export default Contacts;
