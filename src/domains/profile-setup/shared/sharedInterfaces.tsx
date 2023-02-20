import { IForm, handleInputChangeType } from '../../../hooks/useForm';

export interface StepProps {
  form: IForm;
  goToNextStep: () => void;
  handleInputChange: handleInputChangeType;
  isValidForm?: boolean;
}
