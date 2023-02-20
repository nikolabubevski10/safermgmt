import { gql } from '@apollo/client';
import { client } from '../../../apollo';

interface GetPhoneTypesData {
  error?: string;
  data?: unknown;
  success: boolean;
}

const GET_PHONE_TYPES = gql`
  query GetPhoneTypes {
    phoneTypes {
      id
      name
      order
    }
  }
`;

export default async (): Promise<GetPhoneTypesData> => {
  try {
    const { data } = await client.query({
      query: GET_PHONE_TYPES,
    });
    return { data: data.phoneTypes, success: true };
  } catch (err) {
    const stringError = typeof err !== 'string' ? '' : err;
    return { error: stringError, success: false };
  }
};
