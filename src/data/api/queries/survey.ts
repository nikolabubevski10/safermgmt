import { gql } from '@apollo/client';
import { client } from '../../../apollo';

interface GetSurveyArgs {
  surveyId: string;
}

interface GetSurveyData {
  error?: string;
  data?: unknown;
  success: boolean;
}

export const GET_SURVEY = gql`
  query GetSurvey($id: ID!) {
    survey(id: $id) {
      id
      name
      header
      questions {
        id
        text
        isActive
        sequence
      }
    }
  }
`;

export default async ({
  surveyId: id,
}: GetSurveyArgs): Promise<GetSurveyData> => {
  try {
    const { data } = await client.query({
      query: GET_SURVEY,
      variables: {
        id,
      },
    });

    return { data: data.survey, success: true };
  } catch (err) {
    const stringError = typeof err !== 'string' ? '' : err;
    return { error: stringError, success: false };
  }
};
