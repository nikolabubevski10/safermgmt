import { gql } from '@apollo/client';
import { client } from '../../../apollo';

interface RefUserOrganizationCreateArgs {
  organizationId: string;
  userAccountId: string;
}

interface RefUserOrganizationCreateData {
  error?: string;
  data?: unknown;
  success: boolean;
}

const REF_USER_ORGANIZATION_CREATE = gql`
  mutation RefUserOrganization($input: RefUserOrganizationCreateInput!) {
    refUserOrganizationCreate(input: $input) {
      userAccount {
        id
        firstName
      }
      organization {
        id
        name
      }
    }
  }
`;

export default async ({
  organizationId,
  userAccountId,
}: RefUserOrganizationCreateArgs): Promise<RefUserOrganizationCreateData> => {
  try {
    const { data } = await client.mutate({
      mutation: REF_USER_ORGANIZATION_CREATE,
      variables: {
        input: {
          organizationId,
          userAccountId,
        },
      },
    });

    return { data: data, success: true };
  } catch (err) {
    const stringError = typeof err !== 'string' ? '' : err;
    return { error: stringError, success: false };
  }
};
