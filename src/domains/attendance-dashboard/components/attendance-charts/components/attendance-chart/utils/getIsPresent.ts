import { StatusEnum } from '../../../../../state/types';

const getIsPresent = (abbr: keyof typeof StatusEnum | ''): boolean => {
  if (
    abbr === StatusEnum.P ||
    abbr === StatusEnum.RAE ||
    abbr === StatusEnum.OCT
  )
    return true;
  return false;
};

export default getIsPresent;
