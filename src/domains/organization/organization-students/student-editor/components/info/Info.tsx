import React from 'react';
import {
  Container,
  InputGroup,
  GroupInner1,
  GroupInner2,
  FillerDiv,
} from './InfoStyles';
import { IFormValues } from '../../../types';
import { UseFormRegister } from 'react-hook-form';
import fieldLabels from '../../assets/fieldLabels';
import fieldNames from '../../assets/fieldNames';
import Input from '../../../shared/input/Input';
import GenderSelector from './components/gender-selector/GenderSelector';
import NotesTextBox from './components/notes-text-box/NotesTextBox';
import EnrollmentStatus from './components/enrollment-status/EnrollmentStatus';

interface Props {
  register: UseFormRegister<IFormValues>;
  gender: string;
  enrollmentStatus: boolean;
}

const Info: React.FC<Props> = ({
  register,
  gender,
  enrollmentStatus,
}: Props) => {
  return (
    <Container>
      <InputGroup>
        <Input
          isDisabled
          label={fieldLabels.firstName}
          name={fieldNames.FIRST_NAME}
          register={register}
        />
        <Input
          isDisabled
          label={fieldLabels.middleName}
          name={fieldNames.MIDDLE_NAME}
          register={register}
        />
        <Input
          isDisabled
          label={fieldLabels.lastName}
          name={fieldNames.LAST_NAME}
          register={register}
        />
      </InputGroup>
      <InputGroup>
        <GroupInner1>
          <GroupInner2>
            <GenderSelector isDisabled value={gender} register={register} />
            <Input
              isDisabled
              label={fieldLabels.race}
              name={fieldNames.RACE}
              register={register}
            />
          </GroupInner2>
          <GroupInner2>
            <Input
              isDisabled
              label={fieldLabels.phoneNumber}
              name={fieldNames.PHONE_NUMBER}
              register={register}
            />
            <Input
              isDisabled
              label={fieldLabels.email}
              name={fieldNames.EMAIL}
              register={register}
            />
          </GroupInner2>
        </GroupInner1>
        <NotesTextBox
          isDisabled
          isHighlighted={false}
          isValid={true}
          register={register}
        />
      </InputGroup>
      <InputGroup>
        <Input
          isDisabled
          label={fieldLabels.grade}
          name={fieldNames.GRADE}
          register={register}
        />
        <EnrollmentStatus
          isDisabled
          label={fieldLabels.enrollmentStatus}
          register={register}
          status={enrollmentStatus}
        />
        <FillerDiv />
      </InputGroup>
    </Container>
  );
};

export default Info;
