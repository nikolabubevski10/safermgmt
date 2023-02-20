import { IFormValues } from '../../types';

interface IFieldNames {
  DATE_OF_BIRTH: keyof IFormValues;
  EMAIL: keyof IFormValues;
  ENROLLMENT_STATUS: keyof IFormValues;
  FIRST_NAME: keyof IFormValues;
  GENDER: keyof IFormValues;
  GRADE: keyof IFormValues;
  LAST_NAME: keyof IFormValues;
  MIDDLE_NAME: keyof IFormValues;
  NOTES: keyof IFormValues;
  PHONE_NUMBER: keyof IFormValues;
  RACE: keyof IFormValues;
  STUDENT_ID: keyof IFormValues;
}

const fieldNames: IFieldNames = {
  DATE_OF_BIRTH: 'dateOfBirth',
  EMAIL: 'email',
  ENROLLMENT_STATUS: 'enrollmentStatus',
  FIRST_NAME: 'firstName',
  GENDER: 'gender',
  GRADE: 'grade',
  LAST_NAME: 'lastName',
  MIDDLE_NAME: 'middleName',
  NOTES: 'notes',
  PHONE_NUMBER: 'phoneNumber',
  RACE: 'race',
  STUDENT_ID: 'studentId',
};

export default fieldNames;
