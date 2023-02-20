import { IFormValues } from '../../../../types';

const hasName = (form: IFormValues): boolean => {
  return (form.firstName + form.middleName + form.lastName).length > 0;
};

export default hasName;
