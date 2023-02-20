import { gql } from '@apollo/client';
import { client } from '../../../apollo';

export interface IAddTeachersToSchool {
  schoolId: string;
  userAccountIds: string[];
}

interface IMutationResponse {
  error?: string;
  data?: unknown;
  success: boolean;
}

const ADD_TEACHERS_TO_SCHOOL = gql`
  mutation AddTeachersToSchool($input: AddTeachersToSchoolInput!) {
    addTeachersToSchool(input: $input) {
      id
    }
  }
`;

export default async ({
  schoolId,
  userAccountIds,
}: IAddTeachersToSchool): Promise<IMutationResponse> => {
  try {
    const input = {
      schoolId,
      userAccountIds,
    };

    const { data } = await client.mutate({
      mutation: ADD_TEACHERS_TO_SCHOOL,
      variables: {
        input,
      },
    });

    return { data: data.RefTeacherSchool, success: true };
  } catch (err) {
    console.log({ err });
    const stringError = typeof err !== 'string' ? '' : err;
    return { error: stringError, success: false };
  }
};
