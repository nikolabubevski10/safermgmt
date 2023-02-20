const capitalizeFirst = (s: string): string => {
  return [s.charAt(0).toUpperCase(), ...s.substring(1)].join('');
};
export default capitalizeFirst;
