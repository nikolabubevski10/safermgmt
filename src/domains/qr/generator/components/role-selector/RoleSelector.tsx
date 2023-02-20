import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from './RoleSelectorStyles';
import SliderSelector from './components/slider-selector/SliderSelector';
import { useAppSelector, useAppDispatch } from '../../../../../state/hooks';
import { setRoleFilter } from '../../state/GeneratorActions';
import roleSelectionOptions from '../../state/assets/roleSelectionOptions';

const RoleSelector: React.FC = () => {
  const dispatch = useAppDispatch();

  const { t } = useTranslation();
  const { staffMembers, students, studentContacts } = roleSelectionOptions;
  const tStaffText = t(staffMembers.label);
  const tStudentText = t(students.label);
  const tStudentContactsText = t(studentContacts.label);

  const { roleFilter } = useAppSelector(({ generator }) => generator);

  const options = [
    {
      label: tStaffText,
      value: staffMembers.value,
    },
    {
      label: tStudentText,
      value: students.value,
    },
    {
      label: tStudentContactsText,
      value: studentContacts.value,
    },
  ];

  const positionIndex = roleFilter
    ? options.findIndex((option) => option.value === t(roleFilter))
    : 0;

  const handleSelectorChange = (e: React.MouseEvent) => {
    const radioElem = e.target as HTMLInputElement;
    dispatch(setRoleFilter(radioElem.value));
  };

  return (
    <Container>
      <SliderSelector
        options={options}
        onClick={handleSelectorChange}
        positionIndex={positionIndex}
      />
    </Container>
  );
};

export default RoleSelector;
