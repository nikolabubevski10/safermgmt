import * as yup from 'yup';
export const phoneNumberRegExp = new RegExp(
  /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
);
const yupPhoneNumberFormSchema = yup.object().shape({
  phoneNumber: yup.object({
    text: yup.string().matches(phoneNumberRegExp).required(),
    isValid: yup.boolean().required(),
  }),
  verifiedPhoneNumber: yup.object({
    text: yup.string().matches(phoneNumberRegExp).required(),
    isValid: yup.boolean().required(),
  }),
});

export default yupPhoneNumberFormSchema;
