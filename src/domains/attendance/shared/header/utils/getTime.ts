const getTime = (date: Date): string => {
  const stringMinutes = String(date.getMinutes());
  const isSingleDigitMinutes = stringMinutes.length === 1;
  const minutes = isSingleDigitMinutes ? `0${stringMinutes}` : stringMinutes;

  let hours = date.getHours();
  if (hours > 12) {
    hours = hours - 12;
  } else if (hours === 0) {
    hours = 12;
  }

  const diem = date.getHours() < 12 ? 'am' : 'pm';

  return `${hours}:${minutes} ${diem}`;
};

export default getTime;
