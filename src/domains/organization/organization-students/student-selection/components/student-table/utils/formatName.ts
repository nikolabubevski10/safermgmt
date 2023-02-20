import { IStudent } from '../../../../state/types';

const formatName = (form: IStudent): string => {
  return `${form.lastName}, ${form.firstName}${
    form.middleName ? ` ${form.middleName}` : ''
  }`;
};

export default formatName;
