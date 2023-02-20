import { gql } from '@apollo/client';
import {
  ILocation,
  IName,
} from 'domains/organization/organization-users/types';
import { client } from '../../../apollo';

interface UpdateUserAccountData {
  error?: string;
  data?: unknown;
  success: boolean;
}

export interface IUpdateUserAccount {
  id?: string;
  districtId?: string;
  name?: IName;
  email?: string;
  password?: string;
  phone?: { phone: string; phoneTypeId: string };
  location?: ILocation;
  isActive?: boolean;
}

const UPDATE_USER_ACCOUNT = gql`
  mutation UserUpdate($input: UserUpdateInput!) {
    userUpdate(input: $input) {
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

export default async (
  args: IUpdateUserAccount,
): Promise<UpdateUserAccountData> => {
  try {
    const { data } = await client.mutate({
      mutation: UPDATE_USER_ACCOUNT,
      variables: {
        input: args,
      },
    });

    return { data: data.userUpdate, success: true };
  } catch (err) {
    const stringError = typeof err !== 'string' ? '' : err;
    return { error: stringError, success: false };
  }
};
