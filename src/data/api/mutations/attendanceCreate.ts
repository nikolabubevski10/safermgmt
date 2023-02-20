import { gql } from '@apollo/client';
import { client } from '../../../apollo';

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

interface AttendanceCreateArgs {
  eventDate?: string;
  eventType: keyof AttendanceEventTypeValue;
  schoolId: string;
  status?: keyof AttendanceStudentValue;
  userAccountId: string;
}

interface AttendanceCreateData {
  error?: string;
  data?: unknown;
  success: boolean;
}

const ATTENDANCE_CREATE = gql`
  mutation AttendanceCreate($input: AttendanceCreateInput!) {
    attendanceCreate(input: $input) {
      eventDate
      userAccount {
        id
      }
    }
  }
`;

export default async ({
  eventDate,
  eventType,
  schoolId,
  status,
  userAccountId,
}: AttendanceCreateArgs): Promise<AttendanceCreateData> => {
  try {
    const { data } = await client.mutate({
      mutation: ATTENDANCE_CREATE,
      variables: {
        input: {
          eventDate,
          eventType,
          schoolId,
          status,
          userAccountId,
        },
      },
    });

    return { data: data.attendanceCreate, success: true };
  } catch (err) {
    const stringErr = typeof err !== 'string' ? '' : err;
    return { error: stringErr, success: false };
  }
};
