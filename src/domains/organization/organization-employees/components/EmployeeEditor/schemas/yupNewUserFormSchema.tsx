import * as yup from 'yup';

export const phoneNumberRegExp = new RegExp(
  /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
);

const yupNewUserFormSchema = yup.object().shape({
  phoneNumber: yup.object({
    text: yup.string().matches(phoneNumberRegExp),
    isValid: yup.boolean().required(),
  }),
  email: yup.object({
    text: yup.string().email().required(),
    isValid: yup.boolean().required(),
  }),
  firstName: yup.object({
    text: yup.string().required(),
    isValid: yup.boolean().required(),
  }),
  lastName: yup.object({
    text: yup.string().required(),
    isValid: yup.boolean().required(),
  }),
  password: yup.object({
    text: yup.string().min(6).required(),
    isValid: yup.boolean().required(),
  }),
});

export default yupNewUserFormSchema;
