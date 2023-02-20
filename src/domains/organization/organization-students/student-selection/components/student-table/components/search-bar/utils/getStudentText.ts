import { IStudent } from '../../../../../../state/types';

const getstudentText = (student: IStudent): string => {
  return `${student.lastName}, ${student.firstName} ${student.middleName}`;
};

export default getstudentText;
