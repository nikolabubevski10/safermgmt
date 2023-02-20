import React, { useMemo } from 'react';
import { Row } from 'react-table';

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
  column: { filterValue, id, preFilteredRows, setFilter },
}: Props) => {
  const options: string[] = useMemo<string[]>(() => {
    const options: Set<string> = new Set();

    preFilteredRows.forEach((row) => {
      options.add(row.values[id]);
    });

    return [...options.values()];
  }, [id, preFilteredRows]);

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
