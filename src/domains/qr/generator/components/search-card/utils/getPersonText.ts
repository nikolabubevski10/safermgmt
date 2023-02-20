import { IPerson } from '../../../state/types';

const getPersonText = (person: IPerson): string => {
  const rolesText =
    person.roles.length > 0 ? `(${person.roles.join(', ')})` : '';
  return `${person.lastName}, ${person.firstName} ${rolesText}`;
};

export default getPersonText;
