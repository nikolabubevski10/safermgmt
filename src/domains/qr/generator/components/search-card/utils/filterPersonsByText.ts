import { IPerson } from '../../../state/types';
import getPersonText from './getPersonText';

const filterPersonsByText = (
  persons: IPerson[],
  searchText: string,
): IPerson[] => {
  return persons.filter((p) => {
    const searchWords = searchText.split(' ');
    const text = getPersonText(p).toLowerCase();
    return searchWords.reduce((acc: boolean, searchWord: string): boolean => {
      return acc && text.includes(searchWord.toLowerCase());
    }, true);
  });
};

export default filterPersonsByText;
