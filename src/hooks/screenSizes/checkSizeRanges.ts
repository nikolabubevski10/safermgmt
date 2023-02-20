import { ISizeRanges, ISizes } from './types';

function checkSizeRanges(
  sizeInPixels: number,
  sizeRanges: ISizeRanges,
): ISizes {
  const result: ISizes = {};
  const sizeRangesEntries = Object.entries(sizeRanges);
  sizeRangesEntries.forEach(([sizeKey, { min, max }]) => {
    if (min < sizeInPixels && sizeInPixels <= max) {
      result[sizeKey] = true;
    } else {
      result[sizeKey] = false;
    }
  });
  return result;
}

export default checkSizeRanges;
