import {
  IAttendanceRecord,
  TStudentsData,
  TStudentDatum,
} from '../state/types';
import { isWithinInterval } from 'date-fns';

interface IGetStudentsData {
  attendances: IAttendanceRecord[];
  startDate: Date;
  endDate: Date;
}

const blankStudentDatum = {
  name: '',
  grade: '',
  userAccountId: '',
  P: 0,
  U: 0,
  OCT: 0,
  RAE: 0,
};

const getStudentsData = ({
  attendances,
  startDate,
  endDate,
}: IGetStudentsData): TStudentsData => {
  const studentData: TStudentsData = [];

  for (let i = 0; i < attendances.length; i++) {
    const attendance: IAttendanceRecord = attendances[i];

    const isWithinDateRange = isWithinInterval(new Date(attendance.eventDate), {
      start: startDate,
      end: endDate,
    });
    if (!isWithinDateRange) continue;

    const studentIndex = studentData.findIndex((student) => {
      return attendance.userAccountId === student.userAccountId;
    });

    if (studentIndex < 0) {
      const newStudentDatum = {
        ...blankStudentDatum,
        ...{
          name: attendance.name || '',
          grade: attendance.grade || '',
          userAccountId: attendance.userAccountId,
          [attendance.status]: 1,
        },
      };

      studentData.push(newStudentDatum);
    } else {
      const student: TStudentDatum = studentData[studentIndex];
      if (student) {
        student[attendance.status] += 1;
      }
    }
  }

  return studentData;
};

export default getStudentsData;
