import { gql } from '@apollo/client';
import { client } from '../../../apollo';
import { TQuestion } from '../../../domains/surveys/types';
import { GET_SURVEY } from '../queries/survey';

interface UpdateSurveyArgs {
  id: string;
  header?: string;
  questions?: TQuestion[];
  name?: string;
  isActive?: boolean;
}

interface UpdateSurveyData {
  error?: string;
  data?: unknown;
  success: boolean;
}

const UPDATE_SURVEY = gql`
  mutation UpdateSurvey(
    $input: SurveyUpdateInput!
    $questions: [SurveyQuestionCreateInput]
  ) {
    surveyUpdate(input: $input, questions: $questions) {
      id
    }
  }
`;

export default async ({
  id,
  header,
  questions,
  name,
  isActive,
}: UpdateSurveyArgs): Promise<UpdateSurveyData> => {
  try {
    const input = {
      name,
      id,
      header,
      isActive,
    };

    const { data } = await client.mutate({
      mutation: UPDATE_SURVEY,
      variables: {
        input,
        questions,
      },
      refetchQueries: [
        {
          query: GET_SURVEY,
          variables: {
            id,
          },
        },
      ],
    });

    return { data: data.surveyUpdate, success: true };
  } catch (err) {
    const stringError = typeof err !== 'string' ? '' : err;
    return { error: stringError, success: false };
  }
};
