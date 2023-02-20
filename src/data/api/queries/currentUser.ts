import { gql } from '@apollo/client';
import { client } from '../../../apollo';

interface GetCurrentUserData {
  error?: string;
  data?: unknown;
  success: boolean;
}

const GET_CURRENT_USER = gql`
  query {
    currentUser {
      id
      district {
        id
      }
      roles {
        student {
          id
        }
        busDriver {
          id
        }
        contact {
          id
        }
        districtAdmin {
          id
        }
        staff {
          id
          staffRoles
        }
        teacher {
          id
        }
      }
    }
  }
`;

export default async (): Promise<GetCurrentUserData> => {
  try {
    const { data } = await client.query({
      query: GET_CURRENT_USER,
      fetchPolicy: 'no-cache',
    });

    return { data: data.currentUser, success: true };
  } catch (err) {
    const stringError = typeof err !== 'string' ? '' : err;
    return { error: stringError, success: false };
  }
};
