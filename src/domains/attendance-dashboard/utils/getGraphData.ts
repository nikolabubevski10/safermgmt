import { IAttendanceRecord } from '../state/types';
import { getDay } from 'date-fns';
import getIsPresent from './getIsPresent';

type TSeries = [number, number][];

interface returnType {
  graphSeries: [number, number][];
  highestValue: number;
}

const getGraphData = ({
  attendances,
  isPresentSelected,
  isAbsentSelected,
}: {
  attendances: IAttendanceRecord[];
  isPresentSelected: boolean;
  isAbsentSelected: boolean;
}): returnType => {
  const graphSeries: TSeries = Array.from(Array(7), () => [0, 0]);

  for (const attendance of attendances) {
    const date = new Date(attendance.eventDate);
    const dayIndex = getDay(date);
    const isPresent = getIsPresent(attendance.status);

    const day = graphSeries[dayIndex];
    if (!day) continue;

    if (isPresent) {
      day[0]++;
    } else {
      day[1]++;
    }
  }

  const highestValuesByCategory = graphSeries.reduce(
    (acc, day): [number, number] => {
      const dayPresent = day[0] || 0;
      const dayAbsent = day[1] || 0;
      const hightestPresent = Math.max(acc[0], dayPresent);
      const hightestAbsent = Math.max(acc[1], dayAbsent);
      return [hightestPresent, hightestAbsent];
    },
    [0, 0],
  );

  const getHighestValue = () => {
    if (isPresentSelected) return highestValuesByCategory[0] || 0;
    if (isAbsentSelected) return highestValuesByCategory[1] || 0;
    return 0;
  };

  const highestValue = getHighestValue();

  return {
    graphSeries,
    highestValue,
  };
};

export default getGraphData;
