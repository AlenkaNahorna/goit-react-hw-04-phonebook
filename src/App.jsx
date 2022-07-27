import { useState, useEffect } from 'react';
import { Notify } from 'notiflix';
import { Box } from 'styles/Box';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { MainTitle, SubTitle } from 'components/ui/titles';

export function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const handlerSubmit = data => {
    console.log(data);
    contacts.find(contact => contact.name === data.name)
      ? Notify.warning(`${data.name} is already in contacts`)
      : setContacts(prevContacts => [...prevContacts, data]);
  };

  const changeFilter = evt => {
    const { value } = evt.currentTarget;
    setFilter(value);
  };

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      p="ml"
      m="0px auto"
      backgroundColor="secondaryColorBlue"
      width="100%"
      minHeight="100vh"
    >
      <MainTitle title="Phonebook" />

      <ContactForm onSubmit={handlerSubmit} />

      <SubTitle title="Contacts" />

      <Filter value={filter} onFilter={changeFilter} />

      <ContactList contacts={filterContacts} onDeleteContact={deleteContact} />
    </Box>
  );
}
