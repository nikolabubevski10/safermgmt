import React from 'react';
import { IPerson } from '../../../../../../state/types';
import {
  Container,
  TopContainer,
  ContactsContainer,
  ContactContainer,
  Text,
} from './StudentContactResultStyles';
import formatName from './utils/formatName';
import formatContact from './utils/formatContact';
import CheckBox from './components/check-box/CheckBox';

interface Props {
  person: IPerson;
  handleCheckClick: React.ChangeEventHandler<HTMLInputElement>;
  handleTextClick: React.MouseEventHandler<HTMLButtonElement>;
}

const StudentContactResult: React.FC<Props> = ({
  person,
  handleCheckClick,
  handleTextClick,
}: Props) => {
  const contacts = person.contacts || [];

  if (contacts.length === 0) return null;

  return (
    <Container>
      <TopContainer>{formatName(person)}</TopContainer>
      <ContactsContainer>
        {contacts.map((contact, i) => (
          <ContactContainer key={i}>
            <CheckBox
              contact={contact}
              person={person}
              handleCheckClick={handleCheckClick}
            />
            <Text
              value={JSON.stringify({
                contactId: contact.id,
                studentId: person.id,
              })}
              onClick={handleTextClick}
            >
              {formatContact(contact)}
            </Text>
          </ContactContainer>
        ))}
      </ContactsContainer>
    </Container>
  );
};

export default StudentContactResult;
