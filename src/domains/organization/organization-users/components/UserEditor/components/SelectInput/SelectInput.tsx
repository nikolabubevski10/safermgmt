import React, { useState, useRef } from 'react';
import { useOnClickOutside } from '../../../../../shared/useOnClickOutside';
import { SelectInput, TriangeWrapper } from './SelectInputStyles';
import { Input, InputTitle } from '../../UserEditorStyles';
import Triangle from '../../../../../../navigation/components/logo-menu/components/schools/components/triangle/Triangle';
import DropDownList from '../DropDownList/DropDownList';
import { IAccessLevel, IOrganization } from '../../../../types';

interface ISelectProps {
  title: string;
  value: IAccessLevel[] | IOrganization[] | [];
  handleAccessChange?: (item: string, status: boolean) => void;
  handleOrganizationChange?: (item: string, status: boolean) => void;
}

const Select: React.FC<ISelectProps> = (props: ISelectProps) => {
  const [isOpen, setOpen] = useState(false);

  const getInputValue = () => {
    if (props.value) {
      let inputTitle: string = props.value
        .filter((item) => item.isActive)
        .map((item) => item.title || item.name)
        .join(', ');

      if (inputTitle.length > 30) {
        inputTitle = inputTitle.substring(0, 29).concat('...');
      }
      return inputTitle;
    }
  };

  const inputRef = useRef() as React.MutableRefObject<
    | (HTMLInputElement &
        EventTarget & { contains: (e: EventTarget | null) => void })
    | null
  >;
  useOnClickOutside(inputRef, () => setOpen(false));

  return (
    <SelectInput ref={inputRef}>
      <InputTitle>{props.title}</InputTitle>
      <button onClick={() => undefined}></button>
      <Input
        type="text"
        value={props.value ? getInputValue() : ''}
        onChange={() => undefined}
      />
      <TriangeWrapper>
        <Triangle
          up={isOpen}
          color="#233948"
          isActive={isOpen}
          onClick={() => setOpen(!isOpen)}
        />
      </TriangeWrapper>
      {isOpen && (
        <DropDownList
          listData={props.value}
          handleAccessChange={props.handleAccessChange}
          handleOrganizationChange={props.handleOrganizationChange}
        />
      )}
    </SelectInput>
  );
};

export default Select;
