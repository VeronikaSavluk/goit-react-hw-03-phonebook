import { List, ContactItem, DataContact, Delete } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
            <List>
                {contacts.map(({id, name, number}) => (
                    <ContactItem key={id}>
                        <DataContact>{name}: {number}</DataContact>
                        <Delete onClick={() => onDeleteContact(id)}>Delete</Delete>
                    </ContactItem>
                ))}
            </List>
    )
}

export default ContactList;