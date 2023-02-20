import { gql } from '@apollo/client';
import { client } from '../../../apollo';

interface AddStaffRolesToUserAccountArgs {
  userAccountId: string;
  roleIds: string[];
}

interface AddStaffRolesToUserAccountData {
  error?: string;
  data?: unknown;
  success: boolean;
}

const ADD_STAFF_ROLES_TO_USE_ACCOUNT = gql`
  mutation AddStaffRolesToUserAccount(
    $input: AddStaffRolesToUserAccountInput!
  ) {
    addStaffRolesToUserAccount(input: $input) {
      id
    }
  }
`;

export default async ({
  userAccountId,
  roleIds,
}: AddStaffRolesToUserAccountArgs): Promise<AddStaffRolesToUserAccountData> => {
  try {
    const { data } = await client.mutate({
      mutation: ADD_STAFF_ROLES_TO_USE_ACCOUNT,
      variables: {
        input: {
          userAccountId,
          roleIds,
        },
      },
    });

    return { data: data, success: true };
  } catch (err) {
    const stringError = typeof err !== 'string' ? '' : err;
    return { error: stringError, success: false };
  }
};
