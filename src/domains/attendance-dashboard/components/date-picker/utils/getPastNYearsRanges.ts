import { sub, startOfYear, endOfYear, endOfDay } from 'date-fns';

export interface returnType {
  [x: string]: [Date, Date];
}

const getPastNYearsRanges = (number: number): returnType => {
  const indexArray = Array.from(Array(number), (_, i) => i);
  return indexArray.reduce((acc: returnType, yearsAgo: number): returnType => {
    const subOptions = { years: yearsAgo };
    const date = sub(new Date(), subOptions);
    const yearLabel = String(date.getFullYear());

    if (yearsAgo === 0) {
      acc['Year To Date'] = [startOfYear(date), endOfDay(new Date())];
    } else {
      acc[yearLabel] = [startOfYear(date), endOfYear(date)];
    }
    return acc;
  }, {});
};

export default getPastNYearsRanges;
