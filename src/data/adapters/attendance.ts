import { Adapter } from './types';
import attendanceCreate from '../api/mutations/attendanceCreate';

interface AttendanceStudentValue {
  ON_CAMPUS_PRESENT: 'ON_CAMPUS_PRESENT';
  ON_CAMPUS_TARDY: 'ON_CAMPUS_TARDY';
  REMOTE_ASYNCHRONOUS_ENGAGED: 'REMOTE_ASYNCHRONOUS_ENGAGED';
  UNEXCUSED_ABSENSE: 'UNEXCUSED_ABSENSE';
}

interface AttendanceEventTypeValue {
  CHECK_IN: 'CHECK_IN';
  CHECK_OUT: 'CHECK_OUT';
}

interface IAttendanceWithFaceDataArgs {
  eventDate?: string;
  eventType: keyof AttendanceEventTypeValue;
  schoolId: string;
  status?: keyof AttendanceStudentValue;
  userAccountId: string;
}

export default async ({
  eventDate,
  eventType,
  schoolId,
  status,
  userAccountId,
}: IAttendanceWithFaceDataArgs): Promise<Adapter> => {
  try {
    const { data, error, success } = await attendanceCreate({
      eventDate,
      eventType,
      schoolId,
      status,
      userAccountId,
    });

    if (!success) {
      throw error;
    }

    return { success: true, data };
  } catch (err) {
    const stringError = err as string;
    return { success: false, error: stringError };
  }
};
