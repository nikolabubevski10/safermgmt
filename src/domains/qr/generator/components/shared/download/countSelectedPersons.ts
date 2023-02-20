import { IPerson } from '../../../state/types';

const countSelectedPersons = (persons: IPerson[]): number => {
  const result = persons.reduce((acc, person) => {
    const contacts = person.contacts || [];

    const selectedContactCount = contacts.reduce((contactAcc, contact) => {
      if (contact.isSelected) return contactAcc + 1;
      return contactAcc;
    }, 0);

    if (person.isSelected) return acc + 1 + selectedContactCount;
    return acc + selectedContactCount;
  }, 0);
  return result;
};

export default countSelectedPersons;
