import { gql } from '@apollo/client';
import { client } from '../../../apollo';

interface DeleteSurveyArgs {
  id: string;
}

interface DeleteSurveyData {
  error?: string;
  data?: unknown;
  success: boolean;
}

const DELETE_SURVEY = gql`
  mutation DeleteSurvey($input: SurveyDeleteInput!) {
    surveyDelete(input: $input)
  }
`;

export default async ({ id }: DeleteSurveyArgs): Promise<DeleteSurveyData> => {
  try {
    const { data } = await client.mutate({
      mutation: DELETE_SURVEY,
      variables: {
        input: {
          id,
        },
      },
    });

    return { data: data.surveyDelete, success: true };
  } catch (err) {
    const stringError = typeof err !== 'string' ? '' : err;
    return { error: stringError, success: false };
  }
};
