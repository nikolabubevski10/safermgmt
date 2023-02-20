import { ITimeGroup } from '../hooks/useDateRangeBreakpoints';
import { add, isWithinInterval } from 'date-fns';
import { IAttendanceRecord } from '../state/types';
import getIsPresent from '../components/attendance-charts/components/attendance-chart/utils/getIsPresent';

export interface IGetChartData {
  timeGroup: ITimeGroup | null;
  attendances: IAttendanceRecord[];
  startDate: Date;
  endDate: Date;
}

export interface IAttendancesSortedByTimeGroup {
  totalPresentByTimeGroup: number[];
  totalAbsentByTimeGroup: number[];
  attendancesInTimeRange: IAttendanceRecord[];
}

export interface returnType {
  totalPresentByTimeGroup: number[];
  totalAbsentByTimeGroup: number[];
  timeGroupCount: number;
  attendancesInTimeRange: IAttendanceRecord[];
}

const getChartData = ({
  timeGroup,
  attendances,
  startDate,
  endDate,
}: IGetChartData): returnType => {
  const timeGroupCount = timeGroup ? timeGroup.dates.length : 0;
  const farInTheFuture = add(new Date(), { years: 50 });
  const maxDates = timeGroup ? [...timeGroup.dates, farInTheFuture] : [];

  const initialAttendancesSortedByTimeGroup = {
    totalPresentByTimeGroup: Array.from(Array(timeGroupCount), () => 0),
    totalAbsentByTimeGroup: Array.from(Array(timeGroupCount), () => 0),
    attendancesInTimeRange: [],
  };

  const attendancesSortedByTimeGroup = attendances.reduce(
    (
      acc: IAttendancesSortedByTimeGroup,
      attendance: IAttendanceRecord,
    ): IAttendancesSortedByTimeGroup => {
      const isInDateRange = isWithinInterval(new Date(attendance.eventDate), {
        start: startDate,
        end: endDate,
      });

      if (!isInDateRange) return acc;

      const indexOfNextTimeGroup = maxDates.findIndex((date) => {
        return date.getTime() >= new Date(attendance.eventDate).getTime();
      });

      const indexOfTimeGroup = indexOfNextTimeGroup - 1;

      const hasTimeGroup =
        indexOfTimeGroup !== undefined && indexOfTimeGroup >= 0;

      const isPresent = getIsPresent(attendance.status);

      if (hasTimeGroup) {
        acc.attendancesInTimeRange.push(attendance);

        if (isPresent) {
          acc.totalPresentByTimeGroup[indexOfTimeGroup] += 1;
          return acc;
        } else {
          acc.totalAbsentByTimeGroup[indexOfTimeGroup] += 1;
          return acc;
        }
      } else {
        return acc;
      }
    },
    initialAttendancesSortedByTimeGroup,
  );

  const {
    totalPresentByTimeGroup,
    totalAbsentByTimeGroup,
    attendancesInTimeRange,
  } = attendancesSortedByTimeGroup;

  return {
    totalPresentByTimeGroup,
    totalAbsentByTimeGroup,
    timeGroupCount,
    attendancesInTimeRange,
  };
};

export default getChartData;
