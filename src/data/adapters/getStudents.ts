import { Adapter } from './types';
import getStudents from '../api/queries/students';

interface IGetStudents {
  schoolId: number;
}

export default async ({ schoolId }: IGetStudents): Promise<Adapter> => {
  try {
    const students = await getStudents({ schoolId });

    if (!students) {
      return { success: true };
    }

    return { success: true, data: students.data };
  } catch (err) {
    return {
      success: false,
      error: 'Something went wrong with getting the user',
    };
  }
};
