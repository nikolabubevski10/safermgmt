import React from 'react';
import { Name, StyledLink } from './NameCellStyles';
import { TableInstance } from 'react-table';
import { useAppDispatch } from '../../../../../../../../state/hooks';
import { selectStudent } from '../../../../../state/OrgStudentsActions';
import { PATHS } from '../../../../../../../../globals';

interface Cell {
  fullName: string;
  id: string;
}

const NameCell: React.FC<TableInstance> = ({ row }: TableInstance) => {
  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch(selectStudent(row.id));
  };

  const original = row.original as Cell;
  const to = `${PATHS.orgStudents}/${row.original.id}`;
  return (
    <StyledLink to={to}>
      <Name onClick={onClick}>{original.fullName}</Name>
    </StyledLink>
  );
};

export default NameCell;
