import { gql } from '@apollo/client';
import { client } from '../../../apollo';

export interface IRemoveRolesFromUserAccount {
  roleIds: string[];
  userAccountId: string;
}

interface IUserAccountRoleData {
  error?: string;
  data?: unknown;
  success: boolean;
}

const REMOVE_ROLES_USER_ACCOUNT = gql`
  mutation removeRolesFromUserAccount(
    $input: RemoveRolesFromUserAccountInput!
  ) {
    removeRolesFromUserAccount(input: $input)
  }
`;

export default async ({
  roleIds,
  userAccountId,
}: IRemoveRolesFromUserAccount): Promise<IUserAccountRoleData> => {
  try {
    const input = {
      roleIds,
      userAccountId,
    };

    const { data } = await client.mutate({
      mutation: REMOVE_ROLES_USER_ACCOUNT,
      variables: {
        input,
      },
    });

    return { data: data.removeRolesFromUserAccount, success: true };
  } catch (err) {
    console.log({ err });
    const stringError = typeof err !== 'string' ? '' : err;
    return { error: stringError, success: false };
  }
};
