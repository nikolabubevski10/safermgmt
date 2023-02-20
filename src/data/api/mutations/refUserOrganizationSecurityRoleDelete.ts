import { gql } from '@apollo/client';
import { client } from '../../../apollo';

interface RefUserOrganizationSecurityRoleDeleteArgs {
  id: string;
}

interface RefUserOrganizationSecurityRoleDeleteData {
  error?: string;
  data?: unknown;
  success: boolean;
}

const REF_USER_ORGANIZATION_SECURITY_ROLE_DELETE = gql`
  mutation RefUserOrganizationSecurityRoleDelete(
    $input: RefUserOrganizationSecurityRoleDeleteInput!
  ) {
    refUserOrganizationSecurityRoleDelete(input: $input)
  }
`;

export default async ({
  id,
}: RefUserOrganizationSecurityRoleDeleteArgs): Promise<RefUserOrganizationSecurityRoleDeleteData> => {
  try {
    const { data } = await client.mutate({
      mutation: REF_USER_ORGANIZATION_SECURITY_ROLE_DELETE,
      variables: {
        input: {
          id,
        },
      },
    });

    return { data: data, success: true };
  } catch (err) {
    const stringError = typeof err !== 'string' ? '' : err;
    return { error: stringError, success: false };
  }
};
