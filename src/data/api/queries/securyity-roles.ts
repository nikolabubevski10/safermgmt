import { gql } from '@apollo/client';
import { client } from '../../../apollo';

interface GetUserAccountsData {
  error?: string;
  data?: unknown;
  success: boolean;
}

const GET_SECURITY_ROLES = gql`
  query GetSecurityRoles {
    userAccountRoles {
      id
      name
    }
  }
`;

export default async (): Promise<GetUserAccountsData> => {
  try {
    const { data } = await client.query({
      query: GET_SECURITY_ROLES,
    });

    return { data: data.userAccountRoles, success: true };
  } catch (err) {
    const stringError = typeof err !== 'string' ? '' : err;
    return { error: stringError, success: false };
  }
};
