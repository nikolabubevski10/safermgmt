import React from 'react';
import { Label, CheckInput } from './CheckBoxStyles';
import { IPerson, IContact } from '../../../../../../../../state/types';

interface Props {
  person: IPerson;
  handleCheckClick: React.ChangeEventHandler<HTMLInputElement>;
  contact: IContact;
}

const CheckBox: React.FC<Props> = ({
  person,
  handleCheckClick,
  contact,
}: Props) => {
  const contactId = contact?.id || '';
  const studentId = person?.id || '';

  const value = JSON.stringify({
    contactId,
    studentId,
  });

  return (
    <Label>
      <CheckInput
        value={value}
        onChange={handleCheckClick}
        checked={contact.isSelected}
      />
      <div className="result-check-mark" />
    </Label>
  );
};

export default CheckBox;
