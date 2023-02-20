import { IDataAttendanceRecord, IAttendanceRecord } from '../types';

const prepareAttendanceRecordData = (
  data: IDataAttendanceRecord[],
): IAttendanceRecord[] => {
  if (!data) return [];
  return data.reduce(
    (
      acc: IAttendanceRecord[],
      dataAttendanceRecord: IDataAttendanceRecord,
    ): IAttendanceRecord[] => {
      const {
        status: dataStatus,
        id,
        eventDate,
        userAccount,
      } = dataAttendanceRecord;
      const roles = userAccount.roles || [];
      const student = roles.student;
      const userAccountId = userAccount.id || '';

      if (student) {
        const status = dataStatus.abbr || '';
        const userName = userAccount.name || {};
        const firstName = userName.first || '';
        const middleName = userName.middle || '';
        const lastName = userName.last || '';
        const name = `${lastName}, ${firstName} ${middleName}`;
        const dataGrade = student.grade || {};
        const grade = dataGrade.name || '';

        const attendanceRecord = {
          status,
          id,
          eventDate,
          name,
          grade,
          userAccountId,
        };

        return [...acc, attendanceRecord];
      } else {
        return acc;
      }
    },
    [],
  );
};

export default prepareAttendanceRecordData;
