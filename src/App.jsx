import React, { Component } from 'react';
import { Notify } from 'notiflix';
import { Box } from 'styles/Box';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/ui/Filter/Filter';
import { MainTitle, SubTitle } from 'components/ui/titles';

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
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handlerSubmit = data => {
    this.setState(({ contacts }) =>
      contacts.find(contact => contact.name === data.name)
        ? Notify.warning(`${data.name} is already in contacts`)
        : { contacts: [data, ...contacts] }
    );
  };

  changeFilter = evt => {
    const { value } = evt.currentTarget;
    this.setState({ filter: value });
  };

  render() {
    const { contacts, filter } = this.state;

    const normalizeFilter = filter.toLowerCase();

    const filterContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
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
        height="100%"
      >
        <MainTitle title="Phonebook" />

        <ContactForm onSubmit={this.handlerSubmit} />

        <SubTitle title="Contacts" />

        <Filter value={filter} onFilter={this.changeFilter} />

        <ContactList
          contacts={filterContacts}
          onDeleteContact={this.deleteContact}
        />
      </Box>
    );
  }
}
