import { nanoid } from 'nanoid';

import { ContactBook, NameInput } from './FilterContactListItem.styled';
import { NameLable } from '../ContactForm/ContactForm.styled';

const FilterContactList = ({ query, onChange }) => {
    const QueryInputId = nanoid();

    return (
        <ContactBook>
            <NameLable htmlFor={QueryInputId}>Find contacts by name</NameLable>
            <NameInput
              type="text"
                name="query"
                value={query}
              id={QueryInputId}
              onChange={onChange}
/>
        </ContactBook>
    )
}

export default FilterContactList;