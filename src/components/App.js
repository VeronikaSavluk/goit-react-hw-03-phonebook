import React, { Component } from 'react';

import ContactForm from './ContactForm';
import FilterContactList from './FilterContactListItem/FilterContactListItem';
import ContactList from './ContactList';

import { Container, Title } from './Container.styled';

class App extends Component {

  state = {
    contacts: [],
    filter: ''
  }

  fillingOfPhonebook = (newContact) => {
    newContact.id = `id-${this.contactId()}`;
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
  }));
}

  contactId = () => {
    const { contacts } = this.state;
    return contacts.length > 0
      ? Math.max.apply(null, contacts.map(({ id }) => Number(id.replace("id-", "")))) + 1
      : 1;
  }

  deleteContact = (needlessContact) => {
    this.setState(prevState => ({
    contacts: prevState.contacts.filter(contact => contact.id !== needlessContact),
  }));
}

  searchContact = e => {
    this.setState({filter: e.target.value});
}

  filteredContactList = () => {
  const { contacts, filter } = this.state;
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
}

  render() {
  const { filter, contacts } = this.state;

  return (
  <Container>
    <h1>Phonebook</h1>
      <ContactForm contacts={contacts}  onSubmit={this.fillingOfPhonebook} />
    <Title>Contacts</Title>
    <FilterContactList query={filter} onChange={this.searchContact}/>
    <ContactList contacts={this.filteredContactList()} onDeleteContact={this.deleteContact} />
  </Container>
)
  }
}

export default App;
