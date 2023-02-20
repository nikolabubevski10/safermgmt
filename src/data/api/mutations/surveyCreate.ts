import { gql } from '@apollo/client';
import { client } from '../../../apollo';
import { TQuestion } from '../../../domains/surveys/types';

interface SurveyCreateArgs {
  districtId: string;
  name: string;
  header: string;
  questions: TQuestion[];
  isActive: boolean;
}

interface SurveyCreateData {
  error?: string;
  data?: unknown;
  success: boolean;
}

const SURVEY_CREATE = gql`
  mutation CreateSurvey(
    $input: SurveyCreateInput!
    $questions: [SurveyQuestionCreateInput!]
  ) {
    surveyCreate(input: $input, questions: $questions) {
      id
      name
      header
    }
  }
`;

export default async ({
  districtId,
  name,
  header,
  questions,
  isActive,
}: SurveyCreateArgs): Promise<SurveyCreateData> => {
  try {
    const { data } = await client.mutate({
      mutation: SURVEY_CREATE,
      variables: {
        input: {
          name,
          districtId,
          header,
          isActive,
        },
        questions,
      },
    });

    return { data: data.surveyCreate, success: true };
  } catch (err) {
    const stringError = typeof err !== 'string' ? '' : err;
    return { error: stringError, success: false };
  }
};
