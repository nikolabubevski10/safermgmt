import { IStudent } from '../../../../../../state/types';
import getStudentText from './getStudentText';

const filterStudentsByText = (
  persons: IStudent[],
  searchText: string,
): IStudent[] => {
  return persons.filter((p) => {
    const searchWords = searchText.split(' ');
    const text = getStudentText(p).toLowerCase();
    return searchWords.reduce((acc: boolean, searchWord: string): boolean => {
      return acc && text.includes(searchWord.toLowerCase());
    }, true);
  });
};

export default filterStudentsByText;
