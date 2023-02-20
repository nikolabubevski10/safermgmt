import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Checkbox,
  Container,
  InputLabelText,
  Label,
  Overlay,
  StatusContainer,
  StatusText,
} from './EnrollmentStatusStyles';
import CheckIcon from './components/check-icon/CheckIcon';
import ErrorIcon from './components/error-icon/ErrorIcon';
import { UseFormRegister } from 'react-hook-form';
import { IFormValues } from '../../../../../types';
import fieldNames from '../../../../assets/fieldNames';

interface Props {
  isDisabled?: boolean;
  label: string;
  status: boolean;
  register: UseFormRegister<IFormValues>;
}

const enrolled = 'Enrolled';
const notEnrolled = 'Not Enrolled';

const EnrollmentStatus: React.FC<Props> = ({
  isDisabled = false,
  label,
  status,
  register,
}: Props) => {
  const { t } = useTranslation();
  const tLabel = t(label);
  const tEnrolled = t(enrolled);
  const tNotEnrolled = t(notEnrolled);

  return (
    <Container>
      <InputLabelText>{tLabel}</InputLabelText>
      <Label>
        <Checkbox {...register(fieldNames.ENROLLMENT_STATUS)} />
        <StatusContainer>
          {status ? (
            <>
              <CheckIcon />
              <StatusText>{tEnrolled}</StatusText>
            </>
          ) : (
            <>
              <ErrorIcon />
              <StatusText>{tNotEnrolled}</StatusText>
            </>
          )}
        </StatusContainer>
      </Label>
      <Overlay isDisabled={isDisabled} />
    </Container>
  );
};

export default EnrollmentStatus;
