import { IPerson } from '../../../../../state/types';
import roleSelectionOptions from '../../../../../state/assets/roleSelectionOptions';

const getPersonsFilteredByRole = (
  roleFilter: string | null,
  persons: IPerson[],
): IPerson[] => {
  const options = Object.values(roleSelectionOptions);
  const option = options.find((option) => option.value === roleFilter);
  const filters = option?.associatedRoles || [];

  const res = persons.filter((person) => {
    let hasRoleMatch = false;
    for (let i = 0; i < person.roles.length; i++) {
      const personRole = person.roles[i];
      for (let j = 0; j < filters.length; j++) {
        const filter = filters[j];
        const match = filter === personRole;
        hasRoleMatch = hasRoleMatch || match;
      }
    }

    return hasRoleMatch;
  });
  return res;
};

export default getPersonsFilteredByRole;
