import React, { useState, useRef, useEffect } from 'react';
import { IAttendanceRecord } from '../state/types';
import _ from 'lodash';
import {
  eachDayOfInterval,
  eachWeekOfInterval,
  eachMonthOfInterval,
  eachYearOfInterval,
  format,
  startOfWeek,
  endOfWeek,
  isAfter,
} from 'date-fns';

interface IDimensions {
  width: number;
  height: number;
}

type returnType = {
  ref: React.RefObject<HTMLDivElement>;
  timeGroup: ITimeGroup | null;
  dimensions: IDimensions;
};

interface IUseDateRangeBreakpoints {
  minCategoryWidth: number;
  startDate: Date;
  endDate: Date;
  triggerVars: (boolean | IAttendanceRecord[] | string)[];
}

export interface ITimeGroups {
  days: 'days';
  weeks: 'weeks';
  months: 'months';
  years: 'years';
}

export const timeGroups: ITimeGroups = {
  days: 'days',
  weeks: 'weeks',
  months: 'months',
  years: 'years',
};

export interface ITimeGroup {
  type: keyof ITimeGroups;
  dates: Date[];
  formattedCategories: string[];
}

const useDateRangeBreakpoints = ({
  minCategoryWidth,
  startDate,
  endDate,
  triggerVars,
}: IUseDateRangeBreakpoints): returnType => {
  const [timeGroup, setTimeGroup] = useState<ITimeGroup | null>(null);
  const [dimensions, setDimensions] = useState<IDimensions>({
    width: 0,
    height: 0,
  });
  const ref = useRef<HTMLDivElement>(null);

  const handleResize = _.throttle(() => {
    if (!ref || !ref.current) return;

    const maxCategories = ref.current.clientWidth / minCategoryWidth;
    const days = eachDayOfInterval({ start: startDate, end: endDate });
    const weeks = eachWeekOfInterval({ start: startDate, end: endDate });
    const months = eachMonthOfInterval({ start: startDate, end: endDate });
    const years = eachYearOfInterval({ start: startDate, end: endDate });

    const formattedDays = days.map((date) => format(date, 'do'));

    const formattedWeeks = weeks.map((date, i) => {
      if (i === 0)
        return `${format(startDate, 'd MMM')} - ${format(
          endOfWeek(date),
          'd MMM',
        )}`;
      if (isAfter(endOfWeek(date), endDate))
        return `${format(startOfWeek(date), 'd MMM')} - ${format(
          endDate,
          'd MMM',
        )}`;
      return `${format(startOfWeek(date), 'd MMM')} - ${format(
        endOfWeek(date),
        'd MMM',
      )}`;
    });

    const formattedMonths = months.map((date) => format(date, 'MMM'));
    const formattedYears = years.map((date) => format(date, 'yyyy'));

    const groups = [
      {
        type: timeGroups.days,
        dates: days,
        formattedCategories: formattedDays,
      },
      {
        type: timeGroups.weeks,
        dates: weeks,
        formattedCategories: formattedWeeks,
      },
      {
        type: timeGroups.months,
        dates: months,
        formattedCategories: formattedMonths,
      },
      {
        type: timeGroups.years,
        dates: years,
        formattedCategories: formattedYears,
      },
    ];

    const newTimeGroup =
      groups.find((group) => maxCategories >= group.dates.length) || null;

    setTimeGroup(newTimeGroup);

    setDimensions({
      width: ref.current.clientWidth,
      height: ref.current.clientHeight,
    });
  }, 20);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [startDate, endDate, ...triggerVars]);

  return {
    ref,
    timeGroup,
    dimensions,
  };
};

export default useDateRangeBreakpoints;
