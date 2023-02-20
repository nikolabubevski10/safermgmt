import { gql } from '@apollo/client';
import { client } from '../../../apollo';

interface GetAttendancesData {
  error?: string;
  data?: unknown;
  success: boolean;
}

interface GetAttendancesArgs {
  endDate: string;
  schoolId: string;
  startDate: string;
}

const GET_ATTENDANCES = gql`
  query GetAttendances($endDate: Date!, $schoolId: ID, $startDate: Date!) {
    attendances(startDate: $startDate, endDate: $endDate, schoolId: $schoolId) {
      status {
        abbr
      }
      id
      eventDate
      userAccount {
        id
        name {
          first
          middle
          last
        }
        roles {
          student {
            id
            grade {
              name
            }
          }
        }
      }
    }
  }
`;

export default async ({
  endDate,
  schoolId,
  startDate,
}: GetAttendancesArgs): Promise<GetAttendancesData> => {
  try {
    const { data } = await client.query({
      query: GET_ATTENDANCES,
      variables: {
        endDate,
        schoolId,
        startDate,
      },
    });

    return { data: data.attendances, success: true };
  } catch (err) {
    const stringError = typeof err !== 'string' ? '' : err;
    return { error: stringError, success: false };
  }
};
