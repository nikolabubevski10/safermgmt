import * as yup from 'yup';
const contactFormSchema = yup.object().shape({
  fullName: yup.object({
    text: yup.string().required(),
    isValid: yup.boolean().required(),
  }),
  email: yup.object({
    text: yup.string().required(),
    isValid: yup.boolean().required(),
  }),
  organization: yup.object({
    text: yup.string().required(),
    isValid: yup.boolean().required(),
  }),
  message: yup.object({
    text: yup.string().max(7000),
    isValid: yup.boolean().required(),
  }),
});

export default contactFormSchema;
