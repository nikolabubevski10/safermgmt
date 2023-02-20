import { gql } from '@apollo/client';
import { client } from '../../../apollo';

interface GetStudentArgs {
  schoolId: number;
  id: number;
}

interface GetStudentData {
  error?: string;
  data?: unknown;
  success: boolean;
}

const GET_STUDENT = gql`
  query GetStudent($schoolId: Int!, $id: Int!) {
    student(schoolId: $schoolId, id: $id) {
      id
      firstName
      middleName
      lastName
      dateOfBirth
      gender
      adaGrade
      adaGradeDescription
      chronoGrade
      chronoGradeDescription
      address {
        addressType
        primaryAddress
        line1
        line2
        city
        state
        zipCode
      }
      emailAddress {
        primaryEmail
        emailAddress
      }
      phoneNumber {
        phoneType
        primaryPhone
        areaCode
        phoneNumber
      }
      currentlyEnrolled
      school {
        schoolName
        id
      }
    }
  }
`;

export default async ({
  schoolId,
  id,
}: GetStudentArgs): Promise<GetStudentData> => {
  try {
    const { data } = await client.query({
      query: GET_STUDENT,
      variables: {
        schoolId,
        id,
      },
    });

    return { data: data.student, success: true };
  } catch (err) {
    const stringError = typeof err !== 'string' ? '' : err;
    return { error: stringError, success: false };
  }
};
