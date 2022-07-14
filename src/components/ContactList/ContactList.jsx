import PropTypes from 'prop-types';
import {
  ContactsList,
  ContactsListItem,
  ContactsListText,
} from './ContactList.styled';
import { SecondaryButton } from 'components/ui/buttons/SecondaryButton';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactsList>
      {contacts.map(({ id, name, number }) => (
        <ContactsListItem key={id}>
          {name}: <ContactsListText>{number}</ContactsListText>
          <SecondaryButton onClick={() => onDeleteContact(id)}>
            Delate
          </SecondaryButton>
        </ContactsListItem>
      ))}
    </ContactsList>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape).isRequired,
  onDeleteContact: PropTypes.func,
};
