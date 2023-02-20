import { gql } from '@apollo/client';
import { client } from '../../../apollo';

interface GetStudentsArgs {
  schoolId: number;
}

interface GetStudentsData {
  error?: string;
  data?: unknown;
  success: boolean;
}

const GET_STUDENTS = gql`
  query GetStudents($schoolId: Int!) {
    myStudents(schoolId: $schoolId) {
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
}: GetStudentsArgs): Promise<GetStudentsData> => {
  try {
    const { data } = await client.query({
      query: GET_STUDENTS,
      variables: {
        schoolId,
      },
    });

    return { data: data.students, success: true };
  } catch (err) {
    const stringError = typeof err !== 'string' ? '' : err;
    return { error: stringError, success: false };
  }
};
