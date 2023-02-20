import { IPerson } from '../../../../../../../state/types';

const formatperson = (person: IPerson): string => {
  const last = person?.lastName || '';
  const first = person?.firstName || '';
  const middle = person?.middleName ? ` ${person.middleName}` : '';
  return `${last}, ${first}${middle}`;
};

export default formatperson;
