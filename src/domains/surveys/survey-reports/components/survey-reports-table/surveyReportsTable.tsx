import React, { useMemo, useEffect } from 'react';
import {
  ArrowContainer,
  Container,
  FilterContainer,
  Table,
  TableBody,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
} from './SurveyReportsTableStyles';
import COLUMNS from './assets/columns';
import {
  Column,
  HeaderGroup,
  useFilters,
  useSortBy,
  useTable,
} from 'react-table';
import { toggleIsFilterActive } from '../../state/SurveyReportsActions';
import { useAppDispatch } from '../../../../../state/hooks';
import { useAppSelector } from '../../../../../state/hooks';
import Arrow from './components/icons/arrow/Arrow';
import More from './components/icons/more/More';
import views from '../../state/assets/views';
import { isWithinInterval } from 'date-fns';
const SurveyReportsTable: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    isFilterActive,
    isTotalCompletedSelected,
    isTotalIncompletedSelected,
    reports,
    view,
    startDate,
    endDate,
  } = useAppSelector(({ surveyReports }) => surveyReports);
  const isInAuditView = view === views.audit;

  const data = useMemo(() => {
    return reports.filter((r) => {
      return isWithinInterval(r.date, { start: startDate, end: endDate });
    });
  }, [reports, startDate, endDate]);
  const columns = useMemo<Column[]>(() => COLUMNS, []);

  const {
    getTableBodyProps,
    getTableProps,
    headerGroups,
    prepareRow,
    rows,
    setFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useSortBy,
  );

  const handleTableHeaderClick = (column: HeaderGroup) => {
    if (column.canFilter) {
      return dispatch(toggleIsFilterActive());
    }

    if (column.canSort) {
      return column.toggleSortBy(!column.isSortedDesc);
    }
  };

  const setIsFilterActive = () => dispatch(toggleIsFilterActive());

  useEffect(() => {
    if (isTotalCompletedSelected && isTotalIncompletedSelected) {
      setFilter('isComplete', null);
    } else if (isTotalCompletedSelected) {
      setFilter('isComplete', true);
    } else if (isTotalIncompletedSelected) {
      setFilter('isComplete', false);
    } else {
      setFilter(
        'isComplete',
        'isComplete is a boolean, so here is some text to hide all data',
      );
    }
  }, [isTotalCompletedSelected, isTotalIncompletedSelected]);

  return (
    <Container shouldShow={isInAuditView}>
      <Table {...getTableProps()}>
        <TableHead>
          {headerGroups.map((headerGroup, i) => (
            <TableRow
              {...headerGroup.getHeaderGroupProps()}
              key={i}
              length={columns.length}
            >
              {headerGroup.headers.map((column, i) => (
                <TableHeader
                  {...column.getHeaderProps()}
                  key={i}
                  canSort={column.canSort}
                  canFilter={column.canFilter}
                  onClick={() => handleTableHeaderClick(column)}
                >
                  {column.render('Header')}
                  {column.canSort && (
                    <ArrowContainer>
                      <Arrow
                        isSorted={column.isSorted}
                        isSortedDesc={column.isSortedDesc || false}
                      />
                    </ArrowContainer>
                  )}
                  {column.canFilter && (
                    <>
                      <FilterContainer>
                        <More isActive={isFilterActive} />
                      </FilterContainer>

                      {isFilterActive &&
                        column.render('Filter', { setIsFilterActive })}
                    </>
                  )}
                </TableHeader>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <TableRow {...row.getRowProps()} key={i} length={columns.length}>
                {row.cells.map((cell, i) => (
                  <TableData {...cell.getCellProps()} key={i}>
                    {cell.render('Cell')}
                  </TableData>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Container>
  );
};

export default SurveyReportsTable;
