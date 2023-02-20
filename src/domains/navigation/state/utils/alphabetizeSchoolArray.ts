import { ISchool } from '../types';

const alphabetizeSchoolArray = (schoolArray: ISchool[]): ISchool[] => {
  const result = [...schoolArray].sort(function (a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });
  return result;
};

export default alphabetizeSchoolArray;
