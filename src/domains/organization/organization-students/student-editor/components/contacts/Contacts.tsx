import React from 'react';
import { Container } from './ContactsStyles';
import { UseFormRegister } from 'react-hook-form';
import { IFormValues } from '../../../types';

interface Props {
  register: UseFormRegister<IFormValues>;
}

const Contacts: React.FC<Props> = () => {
  return <Container>No Contacts</Container>;
};

export default Contacts;
