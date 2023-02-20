import { gql } from '@apollo/client';
import { client } from '../../../apollo';

export interface IAddRolesToUserAccount {
  roleIds: string[];
  userAccountId: string;
}

interface IUserAccountRoleData {
  error?: string;
  data?: unknown;
  success: boolean;
}

const ADD_ROLES_USER_ACCOUNT = gql`
  mutation AddRolesToUserAccount($input: AddRolesToUserAccountInput!) {
    addRolesToUserAccount(input: $input) {
      id
      role {
        id
        name
      }
    }
  }
`;

export default async ({
  roleIds,
  userAccountId,
}: IAddRolesToUserAccount): Promise<IUserAccountRoleData> => {
  try {
    const input = {
      roleIds,
      userAccountId,
    };

    const { data } = await client.mutate({
      mutation: ADD_ROLES_USER_ACCOUNT,
      variables: {
        input,
      },
    });

    return { data: data.RefUserAccountRole, success: true };
  } catch (err) {
    console.log({ err });
    const stringError = typeof err !== 'string' ? '' : err;
    return { error: stringError, success: false };
  }
};
