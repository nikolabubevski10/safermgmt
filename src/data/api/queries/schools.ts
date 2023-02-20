import { gql } from '@apollo/client';
import { client } from '../../../apollo';

interface GetSchoolsData {
  error?: string;
  data?: unknown;
  success: boolean;
}

interface GetSchoolsInput {
  districtId: string;
}

const GET_SCHOOLS = gql`
  query GetSchools($districtId: ID!) {
    schools(districtId: $districtId) {
      id
      name
    }
  }
`;

export default async ({
  districtId,
}: GetSchoolsInput): Promise<GetSchoolsData> => {
  try {
    const { data } = await client.query({
      query: GET_SCHOOLS,
      variables: {
        districtId,
      },
    });
    return { data: data.schools, success: true };
  } catch (err) {
    const stringError = typeof err !== 'string' ? '' : err;
    return { error: stringError, success: false };
  }
};
