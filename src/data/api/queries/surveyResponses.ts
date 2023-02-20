import { gql } from '@apollo/client';
import { client } from '../../../apollo';

interface GetSurveyResponsesArgs {
  districtId: string;
}

interface GetSurveyData {
  error?: string;
  data?: unknown;
  success: boolean;
}

export const GET_SURVEY_RESPONSES = gql`
  query GetSurveyResponses($districtId: ID!) {
    surveyResponses(districtId: $districtId) {
      updatedAt
      answers {
        id
        value
      }
      survey {
        questions {
          id
        }
      }
      userAccount {
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
        id
        name {
          first
          middle
          last
        }
      }
    }
  }
`;

export default async ({
  districtId,
}: GetSurveyResponsesArgs): Promise<GetSurveyData> => {
  try {
    const { data } = await client.query({
      query: GET_SURVEY_RESPONSES,
      variables: {
        districtId,
      },
    });

    return { data: data.surveyResponses, success: true };
  } catch (err) {
    const stringError = typeof err !== 'string' ? '' : err;
    return { error: stringError, success: false };
  }
};
