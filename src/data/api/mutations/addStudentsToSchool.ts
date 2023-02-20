import { gql } from '@apollo/client';
import { client } from '../../../apollo';

export interface IAddStudentsToSchool {
  schoolId: string;
  userAccountIds: string[];
}

interface GetStudentData {
  error?: string;
  data?: unknown;
  success: boolean;
}

const ADD_STUDENTS_TO_SCHOOL = gql`
  mutation AddStudentsToSchool($input: AddStudentsToSchoolInput!) {
    addStudentsToSchool(input: $input) {
      id
    }
  }
`;

export default async ({
  schoolId,
  userAccountIds,
}: IAddStudentsToSchool): Promise<GetStudentData> => {
  try {
    const input = {
      schoolId,
      userAccountIds,
    };

    const { data } = await client.mutate({
      mutation: ADD_STUDENTS_TO_SCHOOL,
      variables: {
        input,
      },
    });

    return { data: data.RefStudentSchool, success: true };
  } catch (err) {
    console.log({ err });
    const stringError = typeof err !== 'string' ? '' : err;
    return { error: stringError, success: false };
  }
};
