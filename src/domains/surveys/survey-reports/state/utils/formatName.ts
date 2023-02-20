interface IName {
  first?: string | null;
  middle?: string | null;
  last?: string | null;
}

const formatName = (name: IName): string => {
  const lastName = name?.last || '';
  const firstName = name.first || '';
  const middleName = name.middle ? ` ${name.middle}` : '';
  return `${lastName}, ${firstName}${middleName}`;
};

export default formatName;
