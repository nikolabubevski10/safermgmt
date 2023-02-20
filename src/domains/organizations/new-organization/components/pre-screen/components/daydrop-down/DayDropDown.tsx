import React, { useState, useMemo, useEffect } from 'react';
import {
  Container,
  DropItem,
  DayName,
  Label,
  Cover,
} from './DayDropDownStyles';
import NavLink from './components/nav-link/NavLink';
import { useAppSelector } from '../../../../../../../state/hooks';
import { DeliveryDays } from '../../../../../state/assets/types';

interface Props {
  handleCheckChange: (day: DeliveryDays) => void;
  label: string;
}

const DayDropDown: React.FC<Props> = (props: Props) => {
  const { handleCheckChange, label } = props;
  const [selectedDays, setSelectedDays] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { organizationPreScreenWithChanges } = useAppSelector(
    ({ organizations }) => organizations,
  );

  const DaysList = useMemo(
    () => organizationPreScreenWithChanges.deliveryDays,
    [organizationPreScreenWithChanges.deliveryDays],
  );

  useEffect(() => {
    const selectedDaysList: string[] = [];
    DaysList.map((day) => {
      if (day.active) {
        selectedDaysList.push(day.day);
      }
    });

    const days = selectedDaysList.map((room: string) => room).join(', ');

    setSelectedDays(days);
  }, [DaysList]);

  return (
    <Cover>
      <Label>{label}</Label>
      <Container>
        <NavLink label={selectedDays} isOpen={isOpen} setIsOpen={setIsOpen}>
          {DaysList.map((dayname, index) => (
            <DropItem key={index} onClick={() => handleCheckChange(dayname)}>
              <input type="checkbox" checked={dayname.active} />
              <DayName>{dayname.day}</DayName>
            </DropItem>
          ))}
        </NavLink>
      </Container>
    </Cover>
  );
};

export default DayDropDown;
