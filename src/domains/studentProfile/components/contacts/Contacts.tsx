import React from 'react';
import { contactsData } from './assets/data';
import ContactCard from './componets/contact-card/ContactCard';
import { Container, CardContainer } from './ContactsStyle';

const Contacts: React.FC = () => {
  return (
    <Container>
      {contactsData.map((contact, index) => (
        <CardContainer key={index}>
          <ContactCard contact={contact} />
        </CardContainer>
      ))}
    </Container>
  );
};

export default Contacts;
