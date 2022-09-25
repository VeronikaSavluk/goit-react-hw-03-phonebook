import React, {Component} from "react";
import { nanoid } from 'nanoid';

import { Wrapper, NameLable, NameInput, SubitForm } from './ContactForm.styled';

class ContactForm extends Component {

NameInputId = nanoid();
NumberInputId = nanoid();

state = {
    name: '',
    number: ''
}

handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
}

handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    if (name === '' || number === '') {
        return;
    } else {
        this.props.onSubmit(this.state);
        this.reset();
    }
}

reset = () => {
    this.setState({ name: '',
    number: '' });
}

render() {
    const { name, number } = this.state;
    const { NameInputId, NumberInputId } = this;

    return(
        <Wrapper onSubmit={this.handleSubmit}>
          <NameLable htmlFor={NameInputId}>Name</NameLable>
            <NameInput
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={name}
              id={NameInputId}
              onChange={this.handleChange}
          />
          <NameLable htmlFor={NumberInputId}>Number</NameLable>
            <NameInput
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              value={number}
              id={NumberInputId}
              onChange={this.handleChange}
/>
        <SubitForm type="submit" name="Add contact">Add contact</SubitForm>
        </Wrapper>
    );
    }
}

export default ContactForm;