import { gql } from '@apollo/client';
import { client } from '../../../apollo';

interface CreateUserAccountData {
  error?: string;
  data?: string;
  success: boolean;
}

export interface ICreateUserAccount {
  districtId: string;
  name: {
    first: string;
    last: string;
    middle?: string;
  };
  email: string;
  password: string;
  phone?: {
    phone: string;
    phoneTypeId: string;
  };
}

const CREATE_USER_ACCOUNT = gql`
  mutation UserCreate($input: UserCreateInput!) {
    userCreate(input: $input) {
      email
      id
      name {
        first
        last
      }
      phone {
        phone
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
        }
      }
    }
  }
`;

export default async ({
  districtId,
  name,
  email,
  password,
  phone,
}: ICreateUserAccount): Promise<CreateUserAccountData> => {
  try {
    const input = {
      districtId,
      name,
      email,
      password,
      phone,
    };

    const { data } = await client.mutate({
      mutation: CREATE_USER_ACCOUNT,
      variables: {
        input,
      },
    });

    return { data: data.userCreate, success: true };
  } catch (err) {
    const stringError = typeof err !== 'string' ? '' : err;
    return { error: stringError, success: false };
  }
};
