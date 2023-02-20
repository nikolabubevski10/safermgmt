import { gql } from '@apollo/client';
import { client } from '../../../apollo';

interface GetUserAccountData {
  error?: string;
  data?: unknown;
  success: boolean;
}

interface GetUserAccountArgs {
  id: string;
}

const GET_USER_ACCOUNT = gql`
  query GetUserAccount($id: ID!) {
    userAccount(id: $id) {
      id
      name {
        first
        last
      }
      email
      isActive
      phone {
        phone
        phoneType {
          id
          name
        }
      }
      roles {
        student {
          id
        }
        teacher {
          id
        }
        staff {
          id
          staffRoles
        }
        districtAdmin {
          id
          title
        }
        busDriver {
          id
        }
      }
    }
  }
`;

export default async ({
  id,
}: GetUserAccountArgs): Promise<GetUserAccountData> => {
  try {
    const { data } = await client.query({
      query: GET_USER_ACCOUNT,
      variables: {
        id,
      },
    });

    return { data: data.userAccount, success: true };
  } catch (err) {
    const stringError = typeof err !== 'string' ? '' : err;
    return { error: stringError, success: false };
  }
};
