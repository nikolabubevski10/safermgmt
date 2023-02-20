import { gql } from '@apollo/client';
import { client } from '../../../apollo';

interface GetUserAccountsData {
  error?: string;
  data?: unknown;
  success: boolean;
}

enum UserAccountRoleType {
  BUS_DRIVER = 'BUS_DRIVER',
  CONTACT = 'CONTACT',
  DISTRICT_ADMIN = 'DISTRICT_ADMIN',
  STAFF = 'STAFF',
  STUDENT = 'STUDENT',
  TEACHER = 'TEACHER',
}

export interface GetUserAccountsArgs {
  districtId?: string;
  schoolId?: string;
  roles?: [UserAccountRoleType];
}

const GET_USER_ACCOUNTS = gql`
  query GetUserAccounts($schoolId: ID, $districtId: ID) {
    userAccounts(schoolId: $schoolId, districtId: $districtId) {
      id
      email
      name {
        first
        last
      }
      isActive
    }
  }
`;

export default async (
  args: GetUserAccountsArgs,
): Promise<GetUserAccountsData> => {
  try {
    const { data } = await client.query({
      query: GET_USER_ACCOUNTS,
      variables: {
        districtId: args.districtId,
        schoolId: args.schoolId,
        roles: args.roles,
      },
    });

    return { data: data.userAccounts, success: true };
  } catch (err) {
    const stringError = typeof err !== 'string' ? '' : err;
    return { error: stringError, success: false };
  }
};
