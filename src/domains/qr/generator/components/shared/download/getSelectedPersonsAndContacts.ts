import { IPerson, IContact } from '../../../state/types';

type TPersonOrContact = (IPerson | IContact)[];

const getSelectedPersonsAndContact = (persons: IPerson[]): TPersonOrContact => {
  const result = persons.reduce(
    (acc: TPersonOrContact, person: IPerson): TPersonOrContact => {
      const contacts = person.contacts || [];

      const selectedContactCount = contacts.reduce(
        (contactAcc: IContact[], contact: IContact): IContact[] => {
          if (contact.isSelected) return [...contactAcc, contact];
          return contactAcc;
        },
        [],
      );

      if (person.isSelected) return [...acc, person, ...selectedContactCount];
      return [...acc, ...selectedContactCount];
    },
    [],
  );
  return result;
};

export default getSelectedPersonsAndContact;
