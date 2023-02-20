import React, { useState, useMemo } from 'react';
import { Container, DropItem } from './dropDownStyles';
import NavLink from './components/nav-link/NavLink';
import selected from './assets/icons/selected.png';
import { useEffect } from 'react';

interface IDropDownItem {
  value: string;
  label: string;
}

interface IProps {
  list: IDropDownItem[];
  onChange: (value: string) => void;
  value: string;
}

const DropDown: React.FC<IProps> = ({ list, value, onChange }: IProps) => {
  const [selectedItem, setSelectedItem] = useState<IDropDownItem>();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const item = list.find((item) => item.value === value);
    setSelectedItem(item);
  }, [value]);

  const dropDownList = useMemo(() => list, [list]);

  const handleSelectItem = (item: IDropDownItem) => {
    setSelectedItem(item);
    setIsOpen(false);
    onChange(item.value);
  };
  return (
    <>
      <Container>
        <NavLink
          label={selectedItem?.label || ''}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        >
          {dropDownList.map((item, index) => (
            <div key={index} onClick={() => handleSelectItem(item)}>
              <DropItem>
                {item.label}{' '}
                {selectedItem?.value === item.value && (
                  <img src={selected} alt="current school" />
                )}
              </DropItem>
            </div>
          ))}
        </NavLink>
      </Container>
    </>
  );
};

export default DropDown;
