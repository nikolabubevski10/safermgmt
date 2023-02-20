import { ITeacher } from '../../state/types';

const getDummyTeacher = (numberOfCourses: number): ITeacher => {
  const firstNames = [
    'Todd',
    'Bob',
    'Samantha',
    'Lowri',
    'Troy',
    'Holly',
    'Ellie',
    'Emilie',
    'Fatima',
  ];

  const lastNames = [
    'Gross',
    'Rogers',
    'Lin',
    'Ramsey',
    'Sloan',
    'Acevedo',
    'Jackson',
    'McDonald',
    'Hodge',
  ];

  const capitals = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

  const getRandomChars = (number: number, charList: string[]) => {
    return Array.from(Array(number))
      .map(() => charList[Math.floor(Math.random() * charList.length)])
      .join('');
  };

  const getStudents = (classSize: number) => {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    return Array.from(Array(classSize)).map(() => ({
      isAttending: false,
      name: `${firstName} ${lastName}`,
    }));
  };

  const courses = Array.from(Array(numberOfCourses)).map((_, i) => {
    return {
      name: `Course${i}`,
      id: `${getRandomChars(3, capitals)}-${getRandomChars(3, digits)}`,
      room: String(Math.floor(Math.random() * 1500)),
      building: 'Building',
      students: getStudents(Math.floor(Math.random() * 200)),
    };
  });

  const teacher = {
    name: `Teacher Name`,
    courses,
  };

  return teacher;
};

export default getDummyTeacher;
