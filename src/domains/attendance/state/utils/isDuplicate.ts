interface isDuplicateArgs {
  currentDate: string;
  eventDate: string;
  timeFrame: number; // in milliseconds
}

const isDuplicate = ({
  currentDate,
  eventDate,
  timeFrame,
}: isDuplicateArgs): boolean => {
  const endOfTimeFrame = new Date(
    new Date(eventDate).getTime() + timeFrame,
  ).toISOString();

  return currentDate > eventDate && currentDate < endOfTimeFrame;
};

export default isDuplicate;
