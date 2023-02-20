import { gql } from '@apollo/client';
import { client } from '../../../apollo';

interface GetEmployeeSingleArgs {
  id: number;
}

interface GetEmployeeSingleData {
  error?: string;
  data?: unknown;
  success: boolean;
}

const GET_EMPLOYEE_SINGLE = gql`
  query GetEmployee($id: Int!) {
    employee(id: $id) {
      id
      firstName
      lastName
      phoneNumber {
        id
        phoneNumber
      }
      emailAddress {
        emailAddress
      }
    }
  }
`;

export default async ({
  id,
}: GetEmployeeSingleArgs): Promise<GetEmployeeSingleData> => {
  try {
    const { data } = await client.query({
      query: GET_EMPLOYEE_SINGLE,
      variables: {
        id,
      },
    });

    return { data: data.employee, success: true };
  } catch (err) {
    const stringError = typeof err !== 'string' ? '' : err;
    return { error: stringError, success: false };
  }
};
