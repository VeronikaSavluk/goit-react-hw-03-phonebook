import PropTypes from 'prop-types';
import React, { Component } from "react";
import { nanoid } from 'nanoid';
import {Formik} from 'formik';
import * as yup from 'yup';

import { Wrapper, NameLable, Input, Error, SubitForm } from './ContactForm.styled';

class ContactForm extends Component {
    initialValues = {
        name: '',
        number: ''
    };
    NameInputId = nanoid();
    NumberInputId = nanoid();
    schema = yup.object().shape({
        name: yup.string().required(),
        number: yup.string().required(),
  })

    state = this.initialValues;

    handleSubmit = (values, { resetForm }) => {
        const { name, number } = values;
        console.log(this.props.contacts);

        const contactName = this.props.contacts.map(contact => contact.name);

    if (number === '' && name === '') {
            alert(`Please, enter contact details!`);
    } else
        if (number === '') {
        alert(`Please, enter number!`);
        } else
            if (name === '') {
        alert(`Please, enter name!`);
            } else
                if (contactName.includes(name)) {
                alert(`${name} is already in contacts`);
                } else {
                    values.id = `id-${this.contactId()}`;
                    this.props.onSubmit(values);
                    resetForm();
                    }
}

    contactId = () => {
    const { contacts } = this.props;
    return contacts.length > 0
      ? Math.max.apply(null, contacts.map(({ id }) => Number(id.replace("id-", "")))) + 1
      : 1;
}

render() {
    const { NameInputId, NumberInputId, handleSubmit,
        schema,
    } = this;

    return (
        <div>
            <Formik initialValues={this.initialValues}
                validationSchema={schema}
                onSubmit={handleSubmit}>
                <Wrapper>
                    <NameLable htmlFor={NameInputId}>Name</NameLable>
                    <Input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    id={NameInputId}
                    />
                    <Error name="name" component="div" />
                    <NameLable htmlFor={NumberInputId}>Number</NameLable>
                    <Input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    id={NumberInputId}
                    />
                    <Error name="number" component="div" />
                    <SubitForm type="submit" name="Add contact">Add contact</SubitForm>
            </Wrapper>
            </Formik>
            </div>
    );
    }
}

ContactForm.propTypes = {
    handleSubmit: PropTypes.func,
    NameInputId: PropTypes.func,
    NumberInputId: PropTypes.func,
}

export default ContactForm;