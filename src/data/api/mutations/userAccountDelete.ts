import { gql } from '@apollo/client';
import { client } from '../../../apollo';

interface DeleteUserAccountArgs {
  id: string;
}

interface DeleteUserAccountData {
  error?: string;
  data?: unknown;
  success: boolean;
}

const DELETE_USER_ACCOUNT = gql`
  mutation DeleteUser($input: UserDeleteInput!) {
    userDelete(input: $input)
  }
`;

export default async ({
  id,
}: DeleteUserAccountArgs): Promise<DeleteUserAccountData> => {
  try {
    const { data } = await client.mutate({
      mutation: DELETE_USER_ACCOUNT,
      variables: {
        input: {
          id,
        },
      },
    });

    return { data: data.userDelete, success: true };
  } catch (err) {
    const stringError = typeof err !== 'string' ? '' : err;
    return { error: stringError, success: false };
  }
};
