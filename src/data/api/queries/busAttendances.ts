import { gql } from '@apollo/client';
import { client } from '../../../apollo';

interface GetBusAttendancesData {
  error?: string;
  data?: unknown;
  success: boolean;
}

interface GetBusAttendancesArgs {
  organizationId: string;
  startDate: string;
  endDate: string;
}

const GET_BUS_ATTENDANCES = gql`
  query GetBusAttendances(
    $startDate: String!
    $endDate: String!
    $organizationId: ID!
  ) {
    busAttendances(
      startDate: $startDate
      endDate: $endDate
      organizationId: $organizationId
    ) {
      id
      person {
        id
        organizationPerson {
          ... on Student {
            id
            firstName
            lastName
          }
        }
      }
      busRoute {
        bus {
          id
          number
        }
      }
      eventDate
      latitude
      longitude
    }
  }
`;

export default async ({
  organizationId,
  startDate,
  endDate,
}: GetBusAttendancesArgs): Promise<GetBusAttendancesData> => {
  try {
    const { data } = await client.query({
      query: GET_BUS_ATTENDANCES,
      variables: {
        organizationId,
        startDate,
        endDate,
      },
    });

    return { data: data.busAttendances, success: true };
  } catch (err) {
    const stringError = typeof err !== 'string' ? '' : err;
    return { error: stringError, success: false };
  }
};
