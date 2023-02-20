import { gql } from '@apollo/client';
import { client } from '../../../apollo';

interface RefUserOrganizationSecurityRoleCreateArgs {
  userAccountId: string;
  organizationId: string;
  securityRoleId: string;
}

interface RefUserOrganizationSecurityRoleCreateData {
  error?: string;
  data?: unknown;
  success: boolean;
}

const REF_USER_ORGANIZATION_SECURITY_ROLE_CREATE = gql`
  mutation RefUserOrganizationSecurityRoleCreate(
    $input: RefUserOrganizationSecurityRoleCreateInput!
  ) {
    refUserOrganizationSecurityRoleCreate(input: $input) {
      userAccount {
        id
      }
    }
  }
`;

export default async ({
  userAccountId,
  organizationId,
  securityRoleId,
}: RefUserOrganizationSecurityRoleCreateArgs): Promise<RefUserOrganizationSecurityRoleCreateData> => {
  try {
    const { data } = await client.mutate({
      mutation: REF_USER_ORGANIZATION_SECURITY_ROLE_CREATE,
      variables: {
        input: {
          userAccountId,
          securityRoleId,
          organizationId,
          isActive: true,
        },
      },
    });

    return { data: data, success: true };
  } catch (err) {
    const stringError = typeof err !== 'string' ? '' : err;
    return { error: stringError, success: false };
  }
};
