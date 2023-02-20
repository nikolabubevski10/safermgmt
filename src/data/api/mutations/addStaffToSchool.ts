import { gql } from '@apollo/client';
import { client } from '../../../apollo';

export interface IAddStaffToSchool {
  schoolId: string;
  userAccountIds: string[];
}

interface IMutationResponse {
  error?: string;
  data?: unknown;
  success: boolean;
}

const ADD_STAFF_TO_SCHOOL = gql`
  mutation AddStaffToSchool($input: AddStaffToSchoolInput!) {
    addStaffToSchool(input: $input) {
      id
    }
  }
`;

export default async ({
  schoolId,
  userAccountIds,
}: IAddStaffToSchool): Promise<IMutationResponse> => {
  try {
    const input = {
      schoolId,
      userAccountIds,
    };

    const { data } = await client.mutate({
      mutation: ADD_STAFF_TO_SCHOOL,
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
