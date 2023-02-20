import React from 'react';
import { Row } from 'react-table';
import roles from '../../../../state/assets/roles';

import { Container, Popup, Value } from './SelectColumnFilterStyles';

export interface Props {
  column: {
    filterValue: string;
    id: string;
    preFilteredRows: Row[];
    setFilter: (filterValue?: string) => void;
  };
}

const SelectColumnFilter: React.FC<Props> = ({
  column: { filterValue, setFilter },
}: Props) => {
  const options = [roles.parent, roles.teacher, roles.student, roles.staff];

  const handleClick = (value: string) => {
    setFilter(value || undefined);
  };

  return (
    <Container>
      <Popup>
        <Value
          isActive={filterValue === undefined}
          onClick={() => handleClick('')}
        >
          All
        </Value>

        {options.map((option, i) => (
          <Value
            isActive={filterValue === option}
            key={i}
            onClick={() => handleClick(option)}
          >
            {option}
          </Value>
        ))}
      </Popup>
    </Container>
  );
};

export default SelectColumnFilter;
