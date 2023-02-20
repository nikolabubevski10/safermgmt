import { gql } from '@apollo/client';
import { client } from '../../../apollo';

interface GetEmployeesArgs {
  schoolId: number;
}

interface GetEmployeesData {
  error?: string;
  data?: unknown;
  success: boolean;
}

const GET_EMPLOYEES = gql`
  query GetEmployees($schoolId: Int!) {
    employees(schoolId: $schoolId) {
      id
      firstName
      lastName
    }
  }
`;

export default async ({
  schoolId,
}: GetEmployeesArgs): Promise<GetEmployeesData> => {
  try {
    const { data } = await client.query({
      query: GET_EMPLOYEES,
      variables: {
        schoolId,
      },
    });

    return { data: data.employees, success: true };
  } catch (err) {
    const stringError = typeof err !== 'string' ? '' : err;
    return { error: stringError, success: false };
  }
};
