import { gql } from '@apollo/client';
import { client } from '../../../apollo';

interface GetSchoolUsersData {
  error?: string;
  data?: unknown;
  success: boolean;
}

interface IGetSchoolUsers {
  schoolId: string;
}

const GET_SCHOOL_USERS = gql`
  query GetSchoolUsers($schoolId: ID!) {
    userAccounts(schoolId: $schoolId) {
      id
      name {
        first
        middle
        last
      }
      roles {
        staff {
          id
        }
        teacher {
          id
        }
        student {
          id
          contacts {
            relationship {
              name
            }
            relationshipType {
              name
            }
            userAccount {
              name {
                first
                middle
                last
              }
              id
            }
          }
        }
      }
    }
  }
`;

export default async ({
  schoolId,
}: IGetSchoolUsers): Promise<GetSchoolUsersData> => {
  try {
    const { data } = await client.query({
      query: GET_SCHOOL_USERS,
      variables: {
        schoolId,
      },
    });

    return { data: data.userAccounts, success: true };
  } catch (err) {
    const stringError = typeof err !== 'string' ? '' : err;
    return { error: stringError, success: false };
  }
};
