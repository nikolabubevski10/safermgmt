import { gql } from '@apollo/client';
import { client } from '../../../apollo';

interface GetSchoolsData {
  error?: string;
  data?: unknown;
  success: boolean;
}

const MY_SCHOOLS = gql`
  query {
    mySchools {
      id
      name
    }
  }
`;

export default async (): Promise<GetSchoolsData> => {
  try {
    const { data } = await client.query({
      query: MY_SCHOOLS,
      fetchPolicy: 'no-cache',
    });
    return { data: data.mySchools, success: true };
  } catch (err) {
    const stringError = typeof err !== 'string' ? '' : err;
    return { error: stringError, success: false };
  }
};
