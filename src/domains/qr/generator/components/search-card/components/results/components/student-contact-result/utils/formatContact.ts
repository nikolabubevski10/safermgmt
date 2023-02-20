import { IContact } from '../../../../../../../state/types';

const formatcontact = (contact: IContact): string => {
  const last = contact?.lastName || '';
  const first = contact?.firstName || '';
  const middle = contact?.middleName ? ` ${contact.middleName}` : '';
  const relationship = contact?.relationship
    ? ` (${contact.relationship})`
    : '';
  return `${last}, ${first}${middle}${relationship}`;
};

export default formatcontact;
