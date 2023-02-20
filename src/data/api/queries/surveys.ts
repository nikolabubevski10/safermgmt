import { gql } from '@apollo/client';
import { client } from '../../../apollo';

interface GetAllSurveysArgs {
  districtId: string;
}

interface GetAllSurveysData {
  error?: string;
  data?: unknown;
  success: boolean;
}

const GET_ALL_SURVEYS = gql`
  query GetSurveys($districtId: String!) {
    surveys(districtId: $districtId) {
      id
      name
      isActive
    }
  }
`;

export default async ({
  districtId,
}: GetAllSurveysArgs): Promise<GetAllSurveysData> => {
  try {
    const { data } = await client.query({
      query: GET_ALL_SURVEYS,
      variables: {
        districtId,
      },
    });

    return { data: data.surveys, success: true };
  } catch (err) {
    const stringError = typeof err !== 'string' ? '' : err;
    return { error: stringError, success: false };
  }
};
