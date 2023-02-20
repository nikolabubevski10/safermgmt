import * as yup from 'yup';

export const phoneNumberRegExp = new RegExp(
  /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
);

export const numbersOnlyRegExp = new RegExp(/^\d+$/);

const EditorSchema = yup.object().shape({
  dateOfBirth: yup.date().nullable(),
  email: yup.string().email().required(),
  lid: yup.boolean().required(),
  enrollmentStatus: yup.boolean().required(),
  firstName: yup.string().required(),
  gender: yup.string().required(),
  grade: yup.string().required(),
  lastName: yup.string().required(),
  middleName: yup.string().required(),
  notes: yup.string(),
  phoneNumber: yup.string().matches(phoneNumberRegExp).required(),
  race: yup.string().required(),
  studentId: yup.string().matches(numbersOnlyRegExp).required(),
});

export default EditorSchema;
