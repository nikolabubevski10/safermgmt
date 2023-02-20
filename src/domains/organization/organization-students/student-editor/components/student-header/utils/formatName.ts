import { IFormValues } from '../../../../types';

const formatName = (form: IFormValues): string => {
  return `${form.firstName}${form.middleName ? ` ${form.middleName}` : ''} ${
    form.lastName
  }`;
};

export default formatName;
